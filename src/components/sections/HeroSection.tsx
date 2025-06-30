import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import TitleBlock from '../blocks/TitleBlock';

export default function HeroSection(props) {
  const {
    title,
    subtitle,
    colors = 'bg-light-fg-dark',
    styles = {},
    elementId
  } = props;

  const paddingClass = styles?.self?.padding ? mapStyles({ padding: styles.self.padding }) : '';
  const animation = styles?.self?.animation?.includes('fade-up') ? 'fade-up' : undefined;

  return (
    <section
      id={elementId}
      className={classNames(
        'sb-hero-section',
        colors,
        'flex flex-col justify-center items-center text-center min-h-[60vh]', // ✨ Centering and layout
        paddingClass
      )}
      data-aos={animation}
    >
      <div className="max-w-4xl w-full px-4">
        {title && <TitleBlock {...title} />}
        {subtitle && (
          <p className="text-xl mt-4 text-orange-600"> {/* ✨ Orange subtitle */}
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
