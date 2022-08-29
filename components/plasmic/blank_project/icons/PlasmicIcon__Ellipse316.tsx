// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse316IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse316Icon(props: Ellipse316IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 276 276"}
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
        cx={"138"}
        cy={"138"}
        r={"137.5"}
        stroke={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse316Icon;
/* prettier-ignore-end */
