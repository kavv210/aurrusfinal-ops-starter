import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function TitleBlock({
  className = '',
  text = '',
  color = 'text-dark',
  styles = {},
  level = 2,
  ...rest
}) {
  const HeadingTag = `h${level}` as any;
  const fieldPath = rest['data-sb-field-path'];

  return (
    <HeadingTag
      className={classNames(
        'sb-component sb-component-block sb-component-title',
        // ↓ force bold, tracking, hover zoom
        'font-extrabold tracking-tight',
        'transition-transform duration-300 hover:scale-105',
        color,
        mapStyles(styles?.self ?? {}),
        className
      )}
      data-sb-field-path={fieldPath}
    >
      <span {...(fieldPath && { 'data-sb-field-path': '.text' })}>{text}</span>
    </HeadingTag>
  );
}
