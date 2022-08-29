// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse314IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse314Icon(props: Ellipse314IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 233 233"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"116.5"}
        cy={"116.5"}
        r={"116.5"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse314Icon;
/* prettier-ignore-end */
