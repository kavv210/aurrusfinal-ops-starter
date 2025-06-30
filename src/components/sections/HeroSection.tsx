import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function HeroSection(props) {
  const {
    title,
    subtitle,
    colors = 'bg-light-fg-dark',
    styles = {},
    elementId
  } = props;

  // padding & animation helpers
  const paddingClass =
    styles?.self?.padding ? mapStyles({ padding: styles.self.padding }) : '';
  const animation = styles?.self?.animation?.[0] || 'fade-up';

  // title may come as plain string or { text: '' }
  const titleText =
    typeof title === 'object' && title?.text ? title.text : title || '';

  return (
    <section
      id={elementId}
      className={classNames(
        'sb-hero-section',
        colors,
        'flex flex-col justify-center items-center text-center min-h-[60vh]',
        'transition-transform duration-300 hover:scale-[1.02] group',
        paddingClass
      )}
      data-aos={animation}
    >
      <div className="max-w-4xl w-full px-4">
        {titleText && (
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="inline-block border-b-4 border-transparent group-hover:border-orange-500 transition-all duration-300">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                {titleText}
              </span>
            </span>
          </h1>
        )}

        {subtitle && (
          <p className="text-xl md:text-2xl mb-2 text-orange-600 transition-colors duration-300 group-hover:text-orange-700">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
