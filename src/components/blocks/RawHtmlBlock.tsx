import React from 'react';

export interface RawHtmlBlockProps {
  html?: string;
  styles?: {
    self?: Record<string, unknown>;
  };
  colors?: string;
}

const RawHtmlBlock: React.FC<RawHtmlBlockProps> = ({ html }) => {
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RawHtmlBlock;
