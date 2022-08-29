// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fluentsend28FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fluentsend28FilledIcon(props: Fluentsend28FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M4.084 1.56l13.228 6.582a.794.794 0 01.325.302.84.84 0 010 .87.796.796 0 01-.325.302L4.084 16.198a.758.758 0 01-.842-.109.82.82 0 01-.246-.382.848.848 0 01-.008-.46L4.31 10.2a.33.33 0 01.096-.16.309.309 0 01.165-.077l6.41-.906a.154.154 0 00.073-.033.163.163 0 00.049-.065l.011-.04a.168.168 0 00-.02-.106.159.159 0 00-.078-.07l-.035-.01-6.404-.906a.309.309 0 01-.164-.078.329.329 0 01-.095-.16l-1.33-5.076a.848.848 0 01.008-.46.82.82 0 01.246-.383.758.758 0 01.842-.11v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fluentsend28FilledIcon;
/* prettier-ignore-end */
