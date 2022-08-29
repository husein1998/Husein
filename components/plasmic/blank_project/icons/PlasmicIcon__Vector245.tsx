// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector245IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector245Icon(props: Vector245IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 31"}
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
          "M6.799 3.223C3.392 3.528 0 6.045 0 7.363c0 1.29 1.039 1.9 2.06 2.68 1.02.78 5.683-3.957 8.469-3.004 2.786.953 1.109 3.48-1.399 5.124-2.954 1.937-5.086 3.378-7.07 6.464-1.07 1.522-2.781 5.8.756 7.7 1.106.594 1.526.97 4.787.87l.068 2.25c.754.868 3.9.827 4.772-.147l-.069-2.25c2.002-.488 6.77-1.848 7.24-3.308.558-.602.978-2.35 0-3.55-1.625-1.99-12.807 4.667-11.922 0 .726-3.826 13.992-7.775 10.237-13.62-.793-1.969-4.17-3.659-6.285-3.498L11.577.878C10.523-.374 7.45-.186 6.799.809v2.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector245Icon;
/* prettier-ignore-end */
