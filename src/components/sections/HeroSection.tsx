// src/components/sections/HeroSection.tsx
import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function HeroSection(props) {
  const { elementId, title = {}, subtitle, colors = '', styles = {} } = props;

  const padding = styles.self?.padding ? mapStyles({ padding: styles.self.padding }) : '';
  const animation = styles.self?.animation?.[0] || '';
  const alignment = styles.self?.textAlign || 'center';

  return (
    <section
      id={elementId}
      className={classNames(colors, padding, 'transition-all duration-500')}
      data-aos={animation}
    >
      <div className={`container mx-auto px-4 text-${alignment}`}>
        {title.text && (
          <h1
            className={classNames(
              styles.title?.textTransform === 'uppercase' && 'uppercase',
              styles.title?.fontWeight === 900 ? 'font-extrabold' : 'font-bold',
              styles.title?.fontSize === 'xl' ? 'text-5xl' : 'text-3xl',
              styles.title?.letterSpacing === 'wider' && 'tracking-wider',
              styles.title?.color || 'text-white'
            )}
          >
            {title.text}
          </h1>
        )}
        {subtitle && (
          <p
            className={classNames(
              'mt-4',
              styles.subtitle?.fontWeight === 500 ? 'font-medium' : 'font-normal',
              styles.subtitle?.fontSize === 'lg' ? 'text-xl' : 'text-base',
              styles.subtitle?.textColor || 'text-white'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
