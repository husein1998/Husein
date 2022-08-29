// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector246IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector246Icon(props: Vector246IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 10"}
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
          "M2.189 1.024C1.092 1.121 0 1.921 0 2.34c0 .41.334.603.663.851s1.83-1.257 2.726-.954c.897.303.357 1.106-.45 1.628C1.99 4.481 1.302 4.94.663 5.92c-.345.484-.895 1.843.244 2.447.356.189.49.308 1.54.276l.023.716c.242.276 1.255.263 1.536-.047l-.022-.715c.644-.155 2.179-.587 2.33-1.051.18-.192.315-.747 0-1.129-.523-.632-4.123 1.484-3.838 0 .234-1.215 4.505-2.47 3.296-4.328C5.517 1.463 4.429.926 3.748.977L3.727.279C3.387-.12 2.398-.06 2.189.257v.767z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector246Icon;
/* prettier-ignore-end */
