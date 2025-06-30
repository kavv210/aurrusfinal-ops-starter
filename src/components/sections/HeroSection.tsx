import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import { TitleBlock } from '../blocks/TitleBlock';

export default function HeroSection(props) {
  const { title, subtitle, colors = 'bg-light-fg-dark', styles = {}, elementId } = props;

  return (
    <section
      id={elementId}
      className={classNames(
        'sb-hero-section',
        colors,
        styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined
      )}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        {title && <TitleBlock {...title} />}
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
      </div>
    </section>
  );
}
