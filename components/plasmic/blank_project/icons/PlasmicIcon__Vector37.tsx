// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 54"}
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
          "M25.3 7.753V0H0v53.27h25.3v-7.754c-5.183 0-10.153-1.99-13.818-5.53-3.665-3.541-5.723-8.344-5.723-13.351 0-5.008 2.058-9.81 5.723-13.352 3.665-3.54 8.635-5.53 13.818-5.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
