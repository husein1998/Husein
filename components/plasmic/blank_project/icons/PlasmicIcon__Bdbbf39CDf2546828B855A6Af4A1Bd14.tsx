// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bdbbf39CDf2546828B855A6Af4A1Bd14IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Bdbbf39CDf2546828B855A6Af4A1Bd14Icon(
  props: Bdbbf39CDf2546828B855A6Af4A1Bd14IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.077 2.327c.596 0 1.078-.52 1.078-1.163S1.673 0 1.077 0C.482 0 0 .521 0 1.164c0 .642.482 1.163 1.077 1.163z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bdbbf39CDf2546828B855A6Af4A1Bd14Icon;
/* prettier-ignore-end */
