// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector39Icon(props: Vector39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M4.154 8.027c2.294 0 4.153-1.797 4.153-4.014C8.307 1.797 6.447 0 4.154 0 1.86 0 0 1.797 0 4.013 0 6.23 1.86 8.027 4.154 8.027z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */
