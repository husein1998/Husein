// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookIcon(props: FacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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

      <g clipPath={"url(#hl0LEiGCDba)"}>
        <path
          d={
            "M10.041 7.775l.363-2.39h-2.27V3.837c0-.653.317-1.29 1.334-1.29H10.5V.51S9.563.35 8.668.35c-1.87 0-3.09 1.144-3.09 3.215v1.82H3.5v2.39h2.078v5.775a8.15 8.15 0 002.557 0V7.775h1.906z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"hl0LEiGCDba"}>
          <path fill={"currentColor"} d={"M0 0h14v14H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
