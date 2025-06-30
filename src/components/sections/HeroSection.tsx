import React from "react";
import classNames from "classnames";
import { mapStylesToClassNames as mapStyles } from "@/utils/map-styles-to-class-names";

/**
 * HeroSection
 *  - Now supports:
 *    • styles.self.className (raw Tailwind classes)
 *    • styles.title.className / styles.subtitle.className
 *    • AOS attributes via styles.self.{ aos, aosDuration, aosDelay }
 */

interface HeroSectionProps {
  elementId?: string;
  title?: {
    text?: string;
    className?: string;
  };
  subtitle?: string;
  colors?: string;
  styles?: {
    self?: Record<string, any> & {
      className?: string;
      aos?: string;
      aosDuration?: number;
      aosDelay?: number;
    };
    title?: Record<string, any> & { className?: string };
    subtitle?: Record<string, any> & { className?: string };
  };
}

export default function HeroSection(props: HeroSectionProps) {
  const {
    elementId,
    title,
    subtitle,
    colors = "",
    styles = {},
  } = props;

  // Map style dictionaries to class strings via the utility
  const sectionStyles = mapStyles(styles?.self || {});
  const titleStyles = mapStyles(styles?.title || {});
  const subtitleStyles = mapStyles(styles?.subtitle || {});

  // Extra raw Tailwind classes (passed through untouched)
  const sectionExtra = styles?.self?.className ?? "";
  const titleExtra = styles?.title?.className ?? "";
  const subtitleExtra = styles?.subtitle?.className ?? "";

  // AOS animation attributes (optional)
  const aosProps: Record<string, string> = {};
  if (styles?.self?.aos) aosProps["data-aos"] = styles.self.aos;
  if (styles?.self?.aosDuration)
    aosProps["data-aos-duration"] = String(styles.self.aosDuration);
  if (styles?.self?.aosDelay)
    aosProps["data-aos-delay"] = String(styles.self.aosDelay);

  return (
    <section
      id={elementId}
      className={classNames(
        colors,
        sectionStyles,
        sectionExtra,
        "py-16 px-4 text-center"
      )}
      {...aosProps}
    >
      {title?.text && (
        <h1 className={classNames("text-4xl font-extrabold", titleStyles, titleExtra)}>
          {title.text}
        </h1>
      )}
      {subtitle && (
        <p className={classNames("mt-4 text-lg", subtitleStyles, subtitleExtra)}>
          {subtitle}
        </p>
      )}
    </section>
  );
}
