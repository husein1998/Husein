// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem5IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem5Icon(
  props: CoreSafariBigSurToolbarToolbarItem5IconProps
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
          "M14.743 16.062l-5.038-4.917a.593.593 0 01-.184-.425c0-.166.07-.325.19-.426l5.032-4.923a.57.57 0 01.413-.172.57.57 0 01.578.585.615.615 0 01-.165.412l-4.625 4.524 4.625 4.523a.603.603 0 01.165.412c0 .33-.248.579-.578.579a.57.57 0 01-.413-.172z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem5Icon;
/* prettier-ignore-end */
