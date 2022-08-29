// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle10Icon(props: Rectangle10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 249 510"}
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
          "M0 57.753C0 37.538 0 27.43 3.934 19.709A36.096 36.096 0 0119.71 3.934C27.428 0 37.538 0 57.752 0h132.651c20.215 0 30.323 0 38.044 3.934a36.098 36.098 0 0115.775 15.775c3.934 7.72 3.934 17.829 3.934 38.044v393.65c0 20.215 0 30.323-3.934 38.044a36.093 36.093 0 01-15.775 15.774c-7.721 3.934-17.829 3.934-38.044 3.934H57.753c-20.215 0-30.323 0-38.044-3.934a36.09 36.09 0 01-15.775-15.774C0 481.726 0 471.618 0 451.403V57.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle10Icon;
/* prettier-ignore-end */
