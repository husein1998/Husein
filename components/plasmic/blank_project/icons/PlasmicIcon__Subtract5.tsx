// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract5Icon(props: Subtract5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 252 545"}
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
          "M2.893 14.493C0 20.171 0 27.603 0 42.469v459.593c0 14.865 0 22.298 2.893 27.976a26.542 26.542 0 0011.6 11.6c5.678 2.893 13.11 2.893 27.976 2.893h166.834c14.866 0 22.298 0 27.976-2.893a26.54 26.54 0 0011.6-11.6c2.893-5.678 2.893-13.111 2.893-27.976V42.469c0-14.865 0-22.298-2.893-27.976a26.542 26.542 0 00-11.6-11.6C231.601 0 224.169 0 209.303 0h-13.046c-.647 0-.97 0-1.228.094a1.56 1.56 0 00-.933.933c-.095.26-.095.582-.095 1.228 0 5.17 0 7.754-.753 9.824a12.492 12.492 0 01-7.465 7.466c-2.07.753-4.655.753-9.824.753H75.814c-5.17 0-7.754 0-9.824-.753a12.491 12.491 0 01-7.466-7.466c-.753-2.07-.753-4.654-.753-9.824 0-.646 0-.969-.094-1.228a1.562 1.562 0 00-.933-.933C56.485 0 56.162 0 55.516 0H42.469C27.604 0 20.171 0 14.493 2.893a26.543 26.543 0 00-11.6 11.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract5Icon;
/* prettier-ignore-end */
