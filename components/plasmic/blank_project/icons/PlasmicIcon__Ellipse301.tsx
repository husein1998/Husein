// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse301IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse301Icon(props: Ellipse301IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 387 387"}
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
        cx={"193.5"}
        cy={"193.5"}
        r={"193"}
        stroke={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse301Icon;
/* prettier-ignore-end */
