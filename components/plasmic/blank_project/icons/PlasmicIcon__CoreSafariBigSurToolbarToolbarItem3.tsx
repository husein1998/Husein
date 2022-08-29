// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem3IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem3Icon(
  props: CoreSafariBigSurToolbarToolbarItem3IconProps
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
          "M12.627 16.075a.566.566 0 00.572-.553v-4.224h4.104c.305 0 .566-.26.566-.572a.57.57 0 00-.566-.566H13.2V5.93a.566.566 0 00-.572-.553.56.56 0 00-.565.553v4.23h-4.11a.57.57 0 00-.565.566c0 .311.26.572.565.572h4.11v4.224a.56.56 0 00.566.553z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem3Icon;
/* prettier-ignore-end */
