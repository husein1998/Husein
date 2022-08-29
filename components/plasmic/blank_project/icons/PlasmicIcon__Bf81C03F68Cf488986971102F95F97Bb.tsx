// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bf81C03F68Cf488986971102F95F97BbIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Bf81C03F68Cf488986971102F95F97BbIcon(
  props: Bf81C03F68Cf488986971102F95F97BbIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 130 59"}
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

      <path d={"M129.216 0H0v58.42h129.216V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Bf81C03F68Cf488986971102F95F97BbIcon;
/* prettier-ignore-end */
