// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Black4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Black4Icon(props: Black4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 283 573"}
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
          "M1.952 64.953c0-22.735 0-34.103 4.424-42.787A40.596 40.596 0 0124.117 4.425C32.801 0 44.17 0 66.905 0h149.19c22.736 0 34.104 0 42.788 4.425a40.599 40.599 0 0117.741 17.74c4.424 8.685 4.424 20.053 4.424 42.788v82.207h1.171c.431 0 .781.35.781.781v66.358c0 .431-.35.781-.781.781h-1.171v292.602c0 22.736 0 34.104-4.424 42.788a40.596 40.596 0 01-17.741 17.741c-8.684 4.425-20.052 4.425-42.788 4.425H66.905c-22.736 0-34.104 0-42.788-4.425a40.593 40.593 0 01-17.74-17.741c-4.425-8.684-4.425-20.052-4.425-42.788v-278.94H.78a.78.78 0 01-.781-.781v-42.157c0-.431.35-.781.78-.781h1.172v-9.758H.78a.781.781 0 01-.781-.781v-42.157c0-.431.35-.781.78-.781h1.172V113.2H.78a.781.781 0 01-.781-.781V91.341c0-.431.35-.781.78-.781h1.172V64.953z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Black4Icon;
/* prettier-ignore-end */
