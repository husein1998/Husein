// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem6IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem6Icon(
  props: CoreSafariBigSurToolbarToolbarItem6IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 22"}
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
          "M10.1 16.24a.57.57 0 00.412-.172l5.038-4.923a.593.593 0 00.184-.425.562.562 0 00-.184-.426l-5.032-4.917a.576.576 0 00-.419-.178.57.57 0 00-.578.585c0 .152.064.304.165.412l4.625 4.524-4.625 4.523a.603.603 0 00-.165.412c0 .33.248.585.578.585z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem6Icon;
/* prettier-ignore-end */
