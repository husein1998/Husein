// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
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
          "M7.056 0a7.086 7.086 0 00-4.99 2.05A6.968 6.968 0 000 6.998c0 1.856.743 3.635 2.067 4.948a7.086 7.086 0 004.99 2.05 7.086 7.086 0 004.989-2.05 6.968 6.968 0 002.066-4.948 6.968 6.968 0 00-2.066-4.948A7.086 7.086 0 007.056 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
