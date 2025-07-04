import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function TitleBlock(props) {
    const {
        className,      // props.title.className if passed from markdown
        text = '',
        color = 'text-dark',
        styles,
        level = 2       // h2 by default, customizable
    } = props;

    const HeadingTag = `h${level}` as any;
    const fieldPath = props['data-sb-field-path'];

    // Defensive: make sure selfStyles is an object
    const selfStyles = (styles && typeof styles === 'object' && 'self' in styles && styles.self) ? styles.self : {};

    return (
        <HeadingTag
            className={classNames(
                'sb-component sb-component-block sb-component-title',
                color,
                mapStyles(selfStyles),
                className,
                '!font-extrabold', // Force Tailwind to override plugin
                '!text-4xl'        // Example — adjust or remove based on your use case
            )}
            data-sb-field-path={fieldPath}
        >
            <span {...(fieldPath && { 'data-sb-field-path': '.text' })}>{text}</span>
        </HeadingTag>
    );
}
