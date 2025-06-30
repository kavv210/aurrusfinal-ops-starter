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
    styles = {}
  } = props;

  const animation    = styles?.self?.animation?.[0] || '';
  const paddingClass = styles?.self?.padding ? mapStyles({ padding: styles.self.padding }) : '';

  /* ———— helpers ———— */
  const ImgWrapper = ({ children }) => (
    <div className="w-4/5 lg:w-2/5 mx-auto lg:mx-0 max-w-[300px]">{children}</div>
  );

  return (
    <section
      id={elementId}
      className={classNames(colors, paddingClass, 'overflow-hidden transition-all duration-500')}
      data-aos={animation}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">

        {image && imagePosition === 'left' && (
          <ImgWrapper>
            <ImageBlock url={image.url} altText={image.altText || 'Feature image'} className="rounded-lg shadow-lg" />
          </ImgWrapper>
        )}

        {/* TEXT */}
        <div className="lg:w-3/5 w-full text-center lg:text-left transition-transform duration-300 hover:scale-[1.02] group">
          {title && (
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="transition-colors duration-300 group-hover:text-orange-500">{title}</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-xl mb-4 text-orange-600 transition-colors duration-300 group-hover:text-orange-700">
              {subtitle}
            </p>
          )}
          {text && (
            <p className="text-base text-gray-700 transition-opacity duration-300 group-hover:opacity-90">
              {text}
            </p>
          )}
        </div>

        {image && imagePosition === 'right' && (
          <ImgWrapper>
            <ImageBlock url={image.url} altText={image.altText || 'Feature image'} className="rounded-lg shadow-lg" />
          </ImgWrapper>
        )}
      </div>
    </section>
  );
}
