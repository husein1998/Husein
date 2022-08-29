// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse75Icon(props: Ellipse75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
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
        cx={"16.279"}
        cy={"16.279"}
        r={"15.909"}
        stroke={"currentColor"}
        strokeWidth={".74"}
      ></circle>
    </svg>
  );
}

export default Ellipse75Icon;
/* prettier-ignore-end */
