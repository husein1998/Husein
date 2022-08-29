// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoreSafariBigSurToolbarToolbarItem2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CoreSafariBigSurToolbarToolbarItem2Icon(
  props: CoreSafariBigSurToolbarToolbarItem2IconProps
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
          "M12.627 12.447a.506.506 0 00.502-.495V5.428l-.038-.953.432.45.96 1.03a.464.464 0 00.343.152c.266 0 .463-.19.463-.45a.443.443 0 00-.146-.33l-2.147-2.072c-.127-.127-.241-.171-.369-.171-.127 0-.24.044-.368.171l-2.147 2.071a.45.45 0 00-.153.33c0 .26.197.451.458.451.127 0 .26-.05.35-.152l.965-1.03.432-.45-.045.953v6.524a.51.51 0 00.508.495zm-3.646 4.975h7.287c1.327 0 1.994-.661 1.994-1.97v-6.34c0-1.308-.667-1.969-1.994-1.969h-1.773v1.023h1.754c.629 0 .99.343.99 1.003v6.226c0 .66-.361 1.004-.99 1.004H8.994c-.635 0-.985-.343-.985-1.004V9.169c0-.66.35-1.003.985-1.003h1.76V7.143H8.98c-1.328 0-1.995.66-1.995 1.97v6.34c0 1.308.667 1.969 1.995 1.969z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoreSafariBigSurToolbarToolbarItem2Icon;
/* prettier-ignore-end */
