// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5249IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5249Icon(props: Group5249IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 45"}
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
        rx={"21.871"}
        ry={"22.016"}
        transform={"matrix(1.00041 0 -.00116 .9996 21.905 22.007)"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Group5249Icon;
/* prettier-ignore-end */
