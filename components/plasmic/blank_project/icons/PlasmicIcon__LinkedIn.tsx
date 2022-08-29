// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedInIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedInIcon(props: LinkedInIconProps) {
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

      <g clipPath={"url(#Kn9hj-y-2a)"}>
        <path
          d={
            "M12.966 0H1.034A1.033 1.033 0 000 1.033v11.934A1.033 1.033 0 001.033 14h11.934A1.034 1.034 0 0014 12.966V1.034A1.034 1.034 0 0012.966 0zM4.174 11.926H2.068V5.24h2.105v6.686zM3.119 4.314a1.209 1.209 0 111.215-1.208A1.191 1.191 0 013.12 4.314zm8.812 7.618H9.827V8.28c0-1.077-.458-1.41-1.049-1.41-.624 0-1.236.471-1.236 1.438v3.625H5.437V5.245H7.46v.927h.027c.203-.412.915-1.114 2-1.114 1.175 0 2.444.697 2.444 2.738v4.136z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"Kn9hj-y-2a"}>
          <path fill={"currentColor"} d={"M0 0h14v14H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedInIcon;
/* prettier-ignore-end */
