// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5277IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5277Icon(props: Group5277IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 63"}
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
          "M21.539 50.668a60.755 60.755 0 01-13.263 10.67c-.112.07-.226.134-.341.201L0 54.535c.083-.077.176-.163.275-.259C6.187 48.678 35.54 9.532 37.495 0c-.135.794 1.764 31.938-15.956 50.668z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.808 62.69c-.15.036-.303.07-.456.1l-5.953-5.255.408-.142c2.554-.902 10.161-3.624 17.731-6.726 8.135-3.333 16.23-7.1 17.972-9.513-.374.561-11.878 17.561-29.702 21.536z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5277Icon;
/* prettier-ignore-end */
