// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse302IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse302Icon(props: Ellipse302IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 399 399"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"199.5"}
        cy={"199.5"}
        r={"199"}
        stroke={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse302Icon;
/* prettier-ignore-end */
