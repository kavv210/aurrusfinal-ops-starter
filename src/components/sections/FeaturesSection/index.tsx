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

  return (
    <section
      id={elementId}
      className={classNames(colors, mapStyles(styles?.self))}
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {image && imagePosition === 'left' && (
          <ImageBlock {...image} className="lg:w-1/2" />
        )}

        <div className="flex flex-col justify-center lg:w-1/2">
          {title && <h2 className="h3 mb-2">{title}</h2>}
          {subtitle && <p className="text-lg mb-4">{subtitle}</p>}
          {text && <p className="mb-6">{text}</p>}
        </div>

        {image && imagePosition === 'right' && (
          <ImageBlock {...image} className="lg:w-1/2" />
        )}
      </div>
    </section>
  );
}
