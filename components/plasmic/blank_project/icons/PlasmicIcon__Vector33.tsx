// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector33Icon(props: Vector33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 35"}
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

      <path
        d={
          "M88.753 34.332H3.638a3.658 3.658 0 01-2.571-1.058A3.597 3.597 0 010 30.724V3.608a3.597 3.597 0 011.067-2.55A3.658 3.658 0 013.638 0h85.115a3.66 3.66 0 012.572 1.058 3.598 3.598 0 011.066 2.55v27.116a3.597 3.597 0 01-1.067 2.55 3.658 3.658 0 01-2.571 1.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
