// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector38Icon(props: Vector38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 38"}
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
          "M0 0v37.763c5.183 0 10.153-1.99 13.818-5.53 3.665-3.541 5.723-8.344 5.723-13.352 0-5.007-2.058-9.81-5.723-13.35C10.153 1.988 5.183 0 0 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */
