// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group96Icon(props: Group96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 140 25"}
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
          "M28.203 6.91c-5.077 0-9.042 3.82-9.042 8.934 0 5.115 3.866 8.901 9.042 8.901 5.177 0 9.107-3.85 9.107-8.93 0-5.05-3.867-8.906-9.107-8.906zm.035 14.152c-2.893 0-5.007-2.228-5.007-5.218 0-3.018 2.079-5.246 4.972-5.246 2.923 0 5.043 2.262 5.043 5.252 0 2.984-2.12 5.213-5.008 5.213zM38.422 10.8h2.52v13.622h4.036V7.238h-6.556V10.8zm-29.415-.202c2.12 0 3.802 1.293 4.437 3.22h4.273c-.774-4.115-4.203-6.909-8.675-6.909C3.965 6.91 0 10.73 0 15.845c0 5.12 3.866 8.906 9.042 8.906 4.367 0 7.866-2.794 8.64-6.944h-4.238a4.502 4.502 0 01-1.649 2.362 4.567 4.567 0 01-2.753.893c-2.923 0-4.978-2.228-4.978-5.218 0-3.018 2.02-5.246 4.949-5.246h-.006zm106.054 3.59l-2.958-.433c-1.409-.202-2.416-.664-2.416-1.76 0-1.195 1.31-1.79 3.086-1.79 1.956 0 3.202.826 3.464 2.188h3.901c-.437-3.458-3.127-5.484-7.26-5.484-4.268 0-7.092 2.165-7.092 5.218 0 2.921 1.846 4.618 5.578 5.149l2.958.433c1.449.196 2.253.762 2.253 1.824 0 1.362-1.409 1.928-3.36 1.928-2.387 0-3.732-.964-3.936-2.424h-3.965c.373 3.353 3.028 5.714 7.861 5.714 4.407 0 7.336-1.997 7.336-5.414 0-3.06-2.12-4.653-5.45-5.15zM42.957.168a2.517 2.517 0 00-1.84.71 2.475 2.475 0 00-.745 1.812c0 1.466 1.106 2.528 2.585 2.528a2.517 2.517 0 001.846-.71 2.475 2.475 0 00.745-1.818 2.458 2.458 0 00-.747-1.815 2.5 2.5 0 00-1.844-.708zm59.196 12.958c0-3.723-2.282-6.211-7.127-6.211-4.57 0-7.126 2.292-7.627 5.813h4c.204-1.363 1.281-2.494 3.563-2.494 2.05 0 3.057.895 3.057 1.991 0 1.432-1.846 1.796-4.134 2.026-3.092.335-6.928 1.397-6.928 5.386 0 3.088 2.329 5.08 6.02 5.08 2.894 0 4.71-1.195 5.618-3.089.134 1.692 1.409 2.788 3.191 2.788h2.352V20.86h-1.979v-7.734h-.006zm-3.96 4.317c0 2.292-2.02 3.983-4.477 3.983-1.513 0-2.794-.635-2.794-1.962 0-1.692 2.055-2.153 3.936-2.355 1.816-.162 2.823-.56 3.33-1.328l.006 1.662zM76.774 6.91c-2.247 0-4.133.935-5.473 2.494V0h-4.034v24.416h3.959V22.16c1.35 1.628 3.26 2.592 5.548 2.592 4.845 0 8.507-3.787 8.507-8.907 0-5.114-3.727-8.935-8.5-8.935h-.007zm-.6 14.154c-2.893 0-5.007-2.229-5.007-5.218 0-2.985 2.149-5.247 5.037-5.247 2.928 0 4.978 2.228 4.978 5.252 0 2.984-2.12 5.213-5.007 5.213zM57.619 6.909c-2.62 0-4.338 1.062-5.35 2.557V7.244h-4v17.172h4.034v-9.333c0-2.627 1.683-4.485 4.169-4.485 2.317 0 3.767 1.627 3.767 3.982v9.836h4.029v-10.13c0-4.318-2.247-7.377-6.65-7.377zm82.118 8.37c0-4.912-3.633-8.37-8.501-8.37-5.181 0-8.978 3.856-8.978 8.936 0 5.35 4.064 8.906 9.043 8.906 4.203 0 7.493-2.459 8.337-5.945h-4.204c-.605 1.523-2.084 2.39-4.069 2.39-2.591 0-4.542-1.594-4.973-4.388h13.345V15.28zm-13.112-1.328c.641-2.39 2.457-3.55 4.542-3.55 2.282 0 4.034 1.293 4.436 3.55h-8.978z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group96Icon;
/* prettier-ignore-end */
