// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 13"}
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
        d={"M3.807 0v4.504l3.806 1.7L3.807 0z"}
        fill={"currentColor"}
        fillOpacity={".602"}
      ></path>

      <path d={"M3.807 0L0 6.204l3.807-1.7V0z"} fill={"currentColor"}></path>

      <path
        d={"M3.807 9.123v3.06l3.809-5.27-3.81 2.21z"}
        fill={"currentColor"}
        fillOpacity={".602"}
      ></path>

      <path
        d={"M3.807 12.183v-3.06L0 6.912l3.807 5.27z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M3.807 8.415l3.806-2.21-3.806-1.7v3.91z"}
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>

      <path
        d={"M0 6.204l3.807 2.21v-3.91L0 6.205z"}
        fill={"currentColor"}
        fillOpacity={".602"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
