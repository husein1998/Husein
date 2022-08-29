// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse299IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse299Icon(props: Ellipse299IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 762 762"}
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

      <circle
        cx={"381"}
        cy={"381"}
        r={"380.5"}
        stroke={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse299Icon;
/* prettier-ignore-end */
