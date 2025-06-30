import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import ImageBlock from '@/components/blocks/ImageBlock';

export default function FeaturesSection(props) {
  const {
    elementId,
    title,
    subtitle,
    text,
    image,
    imagePosition = 'left',
    colors = '',
    styles = {},
  } = props;

  const animation = styles?.self?.animation?.[0] || '';
  const paddingClass = styles?.self?.padding ? mapStyles({ padding: styles.self.padding }) : '';

  return (
    <section
      id={elementId}
      className={classNames(
        colors,
        paddingClass,
        'overflow-hidden',
        'transition-all duration-500',
      )}
      data-aos={animation}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
        {image && imagePosition === 'left' && (
          <div className="lg:w-1/2 w-full">
            <ImageBlock {...image} className="rounded-lg shadow-lg" />
          </div>
        )}

        <div
          className="lg:w-1/2 w-full text-center lg:text-left transition-transform duration-300 hover:scale-[1.02]"
        >
          {title && (
            <h2 className="h3 mb-4 group">
              <span className="transition-colors duration-300 group-hover:text-orange-500">
                {title}
              </span>
            </h2>
          )}
          {subtitle && (
            <p className="text-xl mb-4 text-orange-600">
              {subtitle}
            </p>
          )}
          {text && (
            <p className="text-base text-gray-700">
              {text}
            </p>
          )}
        </div>

        {image && imagePosition === 'right' && (
          <div className="lg:w-1/2 w-full">
            <ImageBlock {...image} className="rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </section>
  );
}
