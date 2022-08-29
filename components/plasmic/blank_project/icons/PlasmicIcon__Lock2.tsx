// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Lock2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Lock2Icon(props: Lock2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M3.798 4.48a.338.338 0 00.26-.103L5.906 2.52a.35.35 0 00.112-.269.384.384 0 00-.112-.269L4.058.108A.332.332 0 003.798 0a.355.355 0 00-.354.368c0 .094.036.184.099.255L4.74 1.798a4.498 4.498 0 00-.776-.072A3.95 3.95 0 000 5.686a3.955 3.955 0 003.964 3.969 3.951 3.951 0 003.96-3.969.358.358 0 00-.373-.372c-.21 0-.35.157-.35.372a3.23 3.23 0 01-3.237 3.247A3.233 3.233 0 01.722 5.686a3.229 3.229 0 013.242-3.238c.34 0 .655.027.924.086L3.547 3.865a.371.371 0 00-.103.256c0 .206.152.359.354.359z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Lock2Icon;
/* prettier-ignore-end */
