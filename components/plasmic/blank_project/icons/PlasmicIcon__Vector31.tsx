// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 14"}
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
          "M7.056 0c-.926 0-1.844.181-2.7.533a7.06 7.06 0 00-2.29 1.517A6.994 6.994 0 00.538 4.32a6.947 6.947 0 001.53 7.626 7.062 7.062 0 002.289 1.517 7.109 7.109 0 002.7.532 7.086 7.086 0 004.99-2.05 6.968 6.968 0 002.066-4.947 6.968 6.968 0 00-2.066-4.948A7.086 7.086 0 007.056 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
