// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
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
          "M0 0c6.425 2.003 12.837 4.2 18.686 7.591l.396.208c.542 4.08.938 8.24.214 12.328-2.941-1.246-5.326-3.437-7.819-5.374C6.68 10.76 1.782 6.191 0 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
