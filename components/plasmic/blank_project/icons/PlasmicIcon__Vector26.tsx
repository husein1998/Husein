// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 160"}
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
          "M80.019 37.82h-.882V13.864c0-1.82-.362-3.623-1.064-5.305a13.858 13.858 0 00-3.03-4.498 13.988 13.988 0 00-4.536-3.006A14.082 14.082 0 0065.157 0H13.98a14.04 14.04 0 00-9.885 4.06A13.807 13.807 0 000 13.866v131.419c0 3.677 1.473 7.203 4.095 9.804a14.04 14.04 0 009.885 4.06h51.176a14.04 14.04 0 009.886-4.06 13.81 13.81 0 004.095-9.804V54.871h.882V37.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
