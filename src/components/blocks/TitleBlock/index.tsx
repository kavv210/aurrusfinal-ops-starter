import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function TitleBlock(props) {
    const {
        className,
        text,
        color = 'text-dark',
        styles = {},
        level = 2,
        enableAnnotations
    } = props;

    const fieldPath = props['data-sb-field-path'];
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    if (!text) return null;

    return (
        <HeadingTag
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-title',
                color,
                className,
                styles?.self ? mapStyles(styles?.self) : undefined
            )}
            {...(enableAnnotations && { 'data-sb-field-path': fieldPath })}
        >
            <span {...(enableAnnotations && { 'data-sb-field-path': '.text' })}>
                {text}
            </span>
        </HeadingTag>
    );
}
