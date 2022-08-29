// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 42"}
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
          "M39.489 10.656v29.385a31.398 31.398 0 01-14.252.412 31.44 31.44 0 01-12.97-5.935 31.546 31.546 0 01-9.03-11.063A31.633 31.633 0 01.103 6.976H17.38a5.036 5.036 0 004.193-2.237A5.07 5.07 0 0022.058 0h6.799a10.603 10.603 0 017.517 3.12 10.658 10.658 0 013.115 7.536z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
