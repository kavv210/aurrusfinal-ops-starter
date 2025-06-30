import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function HeroSection(props) {
  const {
    elementId,
    title,
    subtitle,
    colors = '',
    styles = {}
  } = props;

  const sectionStyles = mapStyles(styles?.self || {});
  const titleStyles = mapStyles(styles?.title || {});
  const subtitleStyles = mapStyles(styles?.subtitle || {});

  return (
    <section
      id={elementId}
      className={classNames(colors, sectionStyles, 'py-16 px-4 text-center')}
    >
      {title?.text && (
        <h1 className={classNames('text-4xl font-extrabold', titleStyles)}>
          {title.text}
        </h1>
      )}
      {subtitle && (
        <p className={classNames('mt-4 text-lg', subtitleStyles)}>
          {subtitle}
        </p>
      )}
    </section>
  );
}
