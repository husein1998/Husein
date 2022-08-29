// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 21"}
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
          "M11.091 0H23.28a.804.804 0 01-.16.446c-.413.707-.784 1.444-1.19 2.151-.573 1.016-1.11 2.051-1.692 3.063-.37.728-.786 1.434-1.18 2.15h-7.106c-.123 0-.246.006-.37.013-.103.272-.274.51-.413.767-.18.293-.327.605-.505.898-.189.394-.45.747-.64 1.14-.392.665-.758 1.34-1.141 2.013-.4.688-.792 1.385-1.174 2.092-.162.25-.311.51-.447.775-.802 1.395-1.577 2.802-2.38 4.195-.068.15-.157.29-.266.413-1.372-.01-2.744 0-4.116 0a2.108 2.108 0 00-.5.07c0-.38.254-.684.425-1.003.206-.428.482-.825.689-1.254 1.644-2.942 3.271-5.894 4.91-8.838.371-.64.69-1.293 1.064-1.92.466-.825.9-1.669 1.386-2.485.155-.341.363-.654.533-.987.605-1.076 1.198-2.158 1.8-3.234A1.88 1.88 0 0111.091 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
