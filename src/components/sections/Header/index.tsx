'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';
import ChevronDownIcon from '../../svgs/chevron-down';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
  const { colors = 'bg-light-fg-dark', styles = {}, enableAnnotations } = props;
  return (
    <header
      className={classNames(
        'sb-component',
        'sb-component-header',
        colors,
        'relative z-50 shadow-header',
        styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
        styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'p-4'
      )}
      {...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
    >
      <div className="mx-auto max-w-7xl">
        <Link href="#main" className="sr-only">
          Skip to main content
        </Link>
        <HeaderContent {...props} />
      </div>
    </header>
  );
}

function HeaderContent(props) {
  const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations, colors = 'bg-light-fg-dark' } = props;

  return (
    <div className="relative flex items-center justify-between h-16">
      {/* Logo (Left) */}
      <div className="flex items-center z-20">
        <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
      </div>

      {/* Centered Primary Nav */}
      {primaryLinks.length > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <ul
            className="hidden lg:flex items-center gap-x-10 text-[1.075rem]"
            {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}
          >
            {primaryLinks.map((link, index) => (
              <NavLink link={link} key={index} enableAnnotations={enableAnnotations} colors={colors} />
            ))}
          </ul>
        </div>
      )}

      {/* Right Side: Secondary Links or Mobile Menu */}
      <div className="flex items-center ml-auto z-20">
        {secondaryLinks.length > 0 && (
          <ul
            className="hidden lg:flex items-center gap-x-4 text-[1.075rem]"
            {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}
          >
            {secondaryLinks.map((link, index) => (
              <NavLink link={link} key={index} enableAnnotations={enableAnnotations} colors={colors} />
            ))}
          </ul>
        )}
        {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
      </div>
    </div>
  );
}

function SiteLogoLink({ title, logo, enableAnnotations }) {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      {logo && <ImageBlock {...logo} {...(enableAnnotations && { 'data-sb-field-path': 'logo' })} />}
      {title && (
        <span className="text-lg font-semibold" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
          {title}
        </span>
      )}
    </Link>
  );
}

function NavLink({ link, enableAnnotations, colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSubNav = link.__metadata?.modelName === 'SubNav';

  return (
    <li
      className="relative group"
      onMouseEnter={() => isSubNav && setIsOpen(true)}
      onMouseLeave={() => isSubNav && setIsOpen(false)}
      {...(enableAnnotations && { 'data-sb-field-path': link.__metadata?.fieldPath || '' })}
    >
      <button
        className={classNames(
          'inline-flex items-center gap-x-1 transition-colors',
          'text-blue-600 hover:text-orange-500 font-medium'
        )}
      >
        {link.label}
        {isSubNav && <ChevronDownIcon className={classNames('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />}
      </button>
      {isSubNav && isOpen && (
        <ul
          className={classNames(
            'absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 rounded-lg bg-white shadow-lg z-50 border border-gray-200 py-2 text-sm',
            colors
          )}
        >
          {(link.links || []).map((sublink, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <Action {...sublink} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileMenu(props) {
  const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations, colors = 'bg-light-fg-dark' } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      document.body.style.overflow = 'unset';
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  return (
    <div className="lg:hidden ml-auto">
      <button
        onClick={() => {
          setIsMenuOpen(true);
          document.body.style.overflow = 'hidden';
        }}
        aria-label="Open Menu"
        className="p-2"
      >
        <MenuIcon className="w-6 h-6 fill-current" />
      </button>
      <div
        className={classNames(
          'fixed top-5 right-5 z-50 w-[90%] max-w-xs rounded-xl bg-white shadow-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
          <button
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = 'unset';
            }}
            className="p-2"
          >
            <CloseIcon className="w-6 h-6 fill-current" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {[...primaryLinks, ...secondaryLinks].map((link, index) => (
            <div key={index} className="text-base">
              <Action {...link} className="block w-full text-left hover:text-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
