// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5227IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5227Icon(props: Group5227IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 26"}
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
        cx={"11.065"}
        cy={"7.084"}
        rx={"7.061"}
        ry={"7.084"}
        fill={"currentColor"}
      ></ellipse>

      <path
        d={
          "M22.24 25.27a9.316 9.316 0 00-.846-3.867 10.103 10.103 0 00-2.41-3.28 11.253 11.253 0 00-3.608-2.19 12.093 12.093 0 00-4.256-.77c-1.46 0-2.906.261-4.255.77a11.255 11.255 0 00-3.608 2.19 10.102 10.102 0 00-2.41 3.28A9.315 9.315 0 000 25.27h22.24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5227Icon;
/* prettier-ignore-end */
