import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function TitleBlock(props) {
    const {
        className, // this is picked from props.title.className
        text = '',
        color = 'text-dark',
        styles = {},
        level = 2 // optional: allow setting h1/h2/etc
    } = props;

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const fieldPath = props['data-sb-field-path'];

    return (
        <HeadingTag
            className={classNames(
                'sb-component sb-component-block sb-component-title',
                color,
                mapStyles(styles?.self),
                className
            )}
            data-sb-field-path={fieldPath}
        >
            <span {...(fieldPath && { 'data-sb-field-path': '.text' })}>{text}</span>
        </HeadingTag>
    );
}
