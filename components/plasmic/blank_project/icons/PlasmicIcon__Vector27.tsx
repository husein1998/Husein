// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 152"}
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
          "M72.303 10.354V141.58c0 2.746-1.1 5.38-3.058 7.322a10.485 10.485 0 01-7.383 3.033H10.441c-2.77 0-5.425-1.091-7.383-3.033A10.313 10.313 0 010 141.58V10.354c0-2.746 1.1-5.38 3.058-7.321A10.485 10.485 0 0110.441 0h6.238a4.885 4.885 0 00.478 4.6 4.948 4.948 0 001.784 1.598c.717.38 1.518.578 2.331.579H50.59c.813 0 1.614-.2 2.332-.579a4.949 4.949 0 001.783-1.597A4.896 4.896 0 0055.183 0h6.68c2.769 0 5.424 1.091 7.382 3.033a10.311 10.311 0 013.058 7.321z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
