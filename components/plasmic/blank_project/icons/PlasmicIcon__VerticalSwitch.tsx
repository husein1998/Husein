// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerticalSwitchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerticalSwitchIcon(props: VerticalSwitchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.221 9.703l1.805-1.805m0 0L7.221 6.093m1.805 1.805H2.708a.903.903 0 01-.903-.903v0M3.61 4.739L1.805 2.934m0 0L3.61 1.128M1.805 2.934h6.77c.498 0 .903.404.903.902v0"
        }
        stroke={"currentColor"}
        strokeWidth={"1.354"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VerticalSwitchIcon;
/* prettier-ignore-end */
