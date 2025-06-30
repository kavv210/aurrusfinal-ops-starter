import React from "react";
import classNames from "classnames";
import { mapStylesToClassNames as mapStyles } from "@/utils/map-styles-to-class-names";

export default function HeroSection(props) {
  const {
    elementId,
    title,
    subtitle,
    colors = "",
    styles = {}
  } = props;

  const sectionStyles = mapStyles(styles?.self || {});
  const titleStyles = mapStyles(styles?.title || {});
  const subtitleStyles = mapStyles(styles?.subtitle || {});

  const sectionExtra = styles?.self?.className || "";
  const titleExtra = styles?.title?.className || "";
  const subtitleExtra = styles?.subtitle?.className || "";

  const aosProps = {};
  if (styles?.self?.aos) aosProps["data-aos"] = styles.self.aos;
  if (styles?.self?.aosDuration)
    aosProps["data-aos-duration"] = String(styles.self.aosDuration);
  if (styles?.self?.aosDelay)
    aosProps["data-aos-delay"] = String(styles.self.aosDelay);

  return (
    <section
      id={elementId}
      className={classNames(colors, sectionStyles, sectionExtra, "py-16 px-4 text-center")}
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
