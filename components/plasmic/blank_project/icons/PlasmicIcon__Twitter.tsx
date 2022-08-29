// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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

      <g clipPath={"url(#XH5oWc7LGra)"}>
        <path
          d={
            "M12.283 4.189c.006.123.006.24.006.364.005 3.735-2.74 8.047-7.758 8.047A7.56 7.56 0 01.35 11.329a5.351 5.351 0 004.035-1.176c-1.166-.023-2.193-.812-2.55-1.966.411.084.833.067 1.232-.05C1.797 7.879.885 6.72.88 5.37v-.033c.379.218.805.341 1.237.353C.923 4.86.55 3.209 1.274 1.915c1.388 1.77 3.43 2.84 5.623 2.957-.221-.98.081-2.01.79-2.705a2.67 2.67 0 013.862.123 5.312 5.312 0 001.734-.688 2.833 2.833 0 01-1.2 1.562 5.462 5.462 0 001.567-.442 5.697 5.697 0 01-1.367 1.467z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"XH5oWc7LGra"}>
          <path fill={"currentColor"} d={"M0 0h14v14H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
