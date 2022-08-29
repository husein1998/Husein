// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 82 21"}
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
          "M6.138 2.095v3.982h3.904v2.988h-3.93v6.059c0 1.338.744 1.99 1.836 1.99.545 0 1.177-.17 1.693-.426l.976 2.959a7.912 7.912 0 01-2.898.597c-3.07.115-5.079-1.62-5.079-5.12V9.065H0V6.077h2.64V2.466l3.498-.371zm67.304 3.796l.258 1.62c1.092-1.735 2.554-1.99 3.99-1.99 1.463 0 2.869.567 3.643 1.335L79.755 9.87c-.718-.597-1.377-.911-2.525-.911-1.836 0-3.53.967-3.53 3.555v7.397h-3.5V5.885l3.242.006zm-8.58 5.376c-.228-1.82-1.664-2.732-3.672-2.732-1.893 0-3.444.911-3.96 2.732h7.633zm-7.689 2.873c.229 1.735 1.75 2.988 4.219 2.988 1.29 0 2.984-.485 3.788-1.309l2.237 2.191c-1.492 1.536-3.93 2.277-6.084 2.277-4.878 0-7.779-2.988-7.779-7.482 0-4.268 2.928-7.34 7.52-7.34 4.735 0 7.692 2.902 7.147 8.675H57.173zM41.735 0v7.794c1.264-1.62 2.813-2.106 4.42-2.106 4.017 0 5.797 2.703 5.797 6.829v7.396h-3.5v-7.367c0-2.561-1.35-3.64-3.216-3.64-2.068 0-3.5 1.734-3.5 3.84v7.17h-3.501V.003l3.5-.003zm-9.297 1.935v3.982h3.904v2.988h-3.93v6.059c0 1.338.747 1.99 1.836 1.99.545 0 1.177-.17 1.693-.426l.976 2.96a7.913 7.913 0 01-2.898.596c-3.07.115-5.079-1.623-5.079-5.12V8.905H26.3V5.917h2.64V2.306l3.498-.37zm-9.67 9.332c-.23-1.82-1.665-2.732-3.674-2.732-1.892 0-3.444.911-3.96 2.732h7.633zm-7.69 2.873c.228 1.735 1.75 2.988 4.218 2.988 1.29 0 2.985-.485 3.788-1.309l2.237 2.191c-1.492 1.536-3.93 2.277-6.084 2.277-4.88 0-7.778-2.988-7.778-7.482 0-4.268 2.928-7.34 7.517-7.34 4.735 0 7.69 2.902 7.146 8.675H15.078z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */