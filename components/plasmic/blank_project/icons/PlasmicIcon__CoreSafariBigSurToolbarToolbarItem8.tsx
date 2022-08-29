// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem8IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem8Icon(
  props: CoreSafariBigSurToolbarToolbarItem8IconProps
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
          "M12.627 17.307a.95.95 0 00.426-.127c3.615-2.026 4.854-2.884 4.854-5.203v-4.86c0-.666-.286-.876-.826-1.105-.75-.311-3.17-1.181-3.92-1.442a1.718 1.718 0 00-.534-.095c-.177 0-.362.05-.527.095-.75.216-3.176 1.137-3.926 1.442-.533.223-.825.439-.825 1.106v4.86c0 2.318 1.245 3.17 4.853 5.202a.973.973 0 00.425.127zm.255-11.752c.959.381 2.82 1.054 3.805 1.391.171.064.21.152.21.368v4.428c0 1.963-.94 2.478-3.876 4.263-.184.114-.286.146-.387.152V5.497a.76.76 0 01.248.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem8Icon;
/* prettier-ignore-end */
