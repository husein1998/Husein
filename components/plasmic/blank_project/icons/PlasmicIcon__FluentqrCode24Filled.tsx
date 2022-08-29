// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FluentqrCode24FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FluentqrCode24FilledIcon(props: FluentqrCode24FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M5.92 4.44H4.44v1.48h1.48V4.44zm-3.7-.37a1.85 1.85 0 011.85-1.85h2.22a1.85 1.85 0 011.85 1.85v2.22a1.85 1.85 0 01-1.85 1.85H4.07a1.85 1.85 0 01-1.85-1.85V4.07zm1.85-.37a.37.37 0 00-.37.37v2.22a.37.37 0 00.37.37h2.22a.37.37 0 00.37-.37V4.07a.37.37 0 00-.37-.37H4.07zm.37 8.139h1.48v1.48H4.44v-1.48zm-2.22-.37a1.85 1.85 0 011.85-1.85h2.22a1.85 1.85 0 011.85 1.85v2.22a1.85 1.85 0 01-1.85 1.85H4.07a1.85 1.85 0 01-1.85-1.85v-2.22zm1.85-.37a.37.37 0 00-.37.37v2.22a.37.37 0 00.37.37h2.22a.37.37 0 00.37-.37v-2.22a.37.37 0 00-.37-.37H4.07zm9.249-6.66h-1.48v1.48h1.48V4.44zm-1.85-2.22a1.85 1.85 0 00-1.85 1.85v2.22a1.85 1.85 0 001.85 1.85h2.22a1.85 1.85 0 001.85-1.85V4.07a1.85 1.85 0 00-1.85-1.85h-2.22zm-.37 1.85a.37.37 0 01.37-.37h2.22a.37.37 0 01.37.37v2.22a.37.37 0 01-.37.37h-2.22a.37.37 0 01-.37-.37V4.07zM9.62 9.62h2.035v2.035H9.619V9.619zm3.885 2.035h-1.85v1.85H9.619v2.035h2.035v-2.035h1.85v2.035h2.035v-2.035h-2.035v-1.85zm0 0V9.619h2.035v2.035h-2.035z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FluentqrCode24FilledIcon;
/* prettier-ignore-end */
