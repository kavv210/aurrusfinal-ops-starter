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
    <div className={colors} data-aos={motion}>
      <div className="w-full max-w-screen-xl px-3 sm:px-4 lg:px-6 mx-auto">
        <div
          className={styles?.self?.className ?? ''}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default RawHtmlBlock;
