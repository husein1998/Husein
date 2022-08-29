// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 39"}
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
          "M37.288 10.008v27.597a29.804 29.804 0 01-13.457.387 29.762 29.762 0 01-12.248-5.573 29.66 29.66 0 01-8.527-10.39A29.577 29.577 0 01.098 6.55h16.314a4.777 4.777 0 003.96-2.101A4.745 4.745 0 0020.829 0h6.42a10.06 10.06 0 017.098 2.93 10.005 10.005 0 012.941 7.078z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
