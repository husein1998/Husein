// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5250IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5250Icon(props: Group5250IconProps) {
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

      <ellipse
        rx={"7.041"}
        ry={"6.996"}
        transform={"matrix(1.00041 0 -.00116 .9996 7.052 6.993)"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Group5250Icon;
/* prettier-ignore-end */
