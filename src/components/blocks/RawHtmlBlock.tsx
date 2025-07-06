import React from 'react';

export interface RawHtmlBlockProps {
  html?: string;
  styles?: {
    self?: {
      className?: string;
      [key: string]: unknown;
    };
  };
  colors?: string;
  motion?: string;
}

const RawHtmlBlock: React.FC<RawHtmlBlockProps> = ({ html, styles, colors = '', motion }) => {
  if (!html) return null;

  return (
    <div
      className={`${colors} ${styles?.self?.className ?? ''}`}
      data-aos={motion}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RawHtmlBlock;
