// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItemIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItemIcon(
  props: CoreSafariBigSurToolbarToolbarItemIconProps
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
          "M12.628 17.2c3.544 0 6.48-2.942 6.48-6.48 0-3.545-2.942-6.48-6.487-6.48-3.538 0-6.473 2.935-6.473 6.48 0 3.538 2.941 6.48 6.48 6.48zm0-1.08a5.374 5.374 0 01-5.394-5.4c0-2.999 2.389-5.4 5.387-5.4 2.999 0 5.4 2.401 5.406 5.4a5.375 5.375 0 01-5.4 5.4zm0-8.634a.46.46 0 00-.477.476v3.177l.05 1.34-.634-.762-.756-.762a.492.492 0 00-.337-.14.452.452 0 00-.457.457.45.45 0 00.12.33l2.122 2.116c.127.127.235.178.369.178.14 0 .254-.057.374-.178l2.116-2.116a.46.46 0 00.133-.33.457.457 0 00-.463-.457.44.44 0 00-.337.14l-.75.762-.648.768.051-1.346V7.962a.457.457 0 00-.476-.476z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItemIcon;
/* prettier-ignore-end */
