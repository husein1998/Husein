// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem4IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem4Icon(
  props: CoreSafariBigSurToolbarToolbarItem4IconProps
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
          "M7.901 14.442h1.086v.972c0 1.309.661 1.97 1.995 1.97h6.378c1.322 0 1.989-.661 1.989-1.97V8.985c0-1.308-.667-1.97-1.989-1.97h-1.092v-.971c0-1.309-.667-1.97-1.989-1.97H7.901c-1.334 0-1.995.661-1.995 1.97v6.429c0 1.308.661 1.97 1.995 1.97zm.013-1.023c-.635 0-.985-.343-.985-1.003V6.1c0-.66.35-1.004.985-1.004h6.346c.63 0 .985.343.985 1.004v.915h-4.263c-1.334 0-1.995.654-1.995 1.97v4.433H7.914zm3.08 2.942c-.628 0-.984-.343-.984-1.004V9.042c0-.66.356-1.003.985-1.003h6.346c.63 0 .985.343.985 1.003v6.315c0 .66-.356 1.004-.985 1.004h-6.346z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem4Icon;
/* prettier-ignore-end */
