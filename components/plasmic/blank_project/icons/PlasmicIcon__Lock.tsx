// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockIcon(props: LockIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M.861 8.749H5.13c.578 0 .86-.287.86-.915V4.543c0-.566-.232-.857-.712-.906v-1.13C5.278.817 4.17 0 2.995 0 1.821 0 .713.816.713 2.507v1.152c-.44.067-.713.354-.713.884v3.29c0 .629.283.916.861.916zm.574-6.336c0-1.126.722-1.722 1.56-1.722.839 0 1.561.596 1.561 1.722v1.22l-3.121.004V2.413z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockIcon;
/* prettier-ignore-end */
