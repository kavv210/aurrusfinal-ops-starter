import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function TitleBlock(props) {
    const {
        className,
        text = '',
        color = 'text-dark',
        styles,
        level = 2
    } = props;

    const HeadingTag = `h${level}` as any;
    const fieldPath = props['data-sb-field-path'];

    // Defensive check to ensure styles is an object and styles.self exists
    const selfStyles = (styles && typeof styles === 'object' && 'self' in styles && styles.self) ? styles.self : {};

    return (
        <HeadingTag
            className={classNames(
                'sb-component sb-component-block sb-component-title',
                color,
                mapStyles(selfStyles),
                className
            )}
            data-sb-field-path={fieldPath}
        >
            <span {...(fieldPath && { 'data-sb-field-path': '.text' })}>{text}</span>
        </HeadingTag>
    );
}
