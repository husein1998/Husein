// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem7IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem7Icon(
  props: CoreSafariBigSurToolbarToolbarItem7IconProps
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
          "M7.133 16.577h10.99c1.334 0 1.994-.661 1.994-1.97V6.851c0-1.309-.66-1.97-1.994-1.97H7.133c-1.328 0-1.995.655-1.995 1.97v7.756c0 1.315.667 1.97 1.995 1.97zm.012-1.023c-.635 0-.984-.337-.984-.998V6.902c0-.661.349-.998.984-.998H9.98v9.65H7.145zm10.965-9.65c.629 0 .985.337.985.998v7.654c0 .661-.356.998-.985.998h-7.134v-9.65h7.134zM8.752 8.261a.37.37 0 00.363-.356.365.365 0 00-.363-.355H7.393a.37.37 0 00-.362.355c0 .185.171.356.362.356h1.36zm0 1.645a.37.37 0 00.363-.362.36.36 0 00-.363-.35H7.393c-.19 0-.362.16-.362.35 0 .19.171.362.362.362h1.36zm0 1.64a.36.36 0 00.363-.35.365.365 0 00-.363-.356H7.393a.37.37 0 00-.362.356c0 .19.171.35.362.35h1.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem7Icon;
/* prettier-ignore-end */
