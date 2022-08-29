// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlackIcon(props: BlackIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 252 510"}
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
          "M1.735 57.753c0-20.215 0-30.323 3.935-38.044A36.096 36.096 0 0121.444 3.934C29.165 0 39.273 0 59.488 0H192.14c20.216 0 30.323 0 38.045 3.934a36.096 36.096 0 0115.774 15.775c3.934 7.72 3.934 17.829 3.934 38.044v73.093h1.041c.384 0 .695.311.695.694v59.003a.695.695 0 01-.695.694h-1.041v260.166c0 20.215 0 30.323-3.934 38.044a36.091 36.091 0 01-15.774 15.774c-7.722 3.934-17.829 3.934-38.045 3.934H59.489c-20.216 0-30.324 0-38.045-3.934A36.09 36.09 0 015.67 489.447c-3.935-7.721-3.935-17.829-3.935-38.044V203.384H.695A.694.694 0 010 202.69v-37.483c0-.384.31-.695.694-.695h1.041v-8.676H.695a.694.694 0 01-.695-.695v-37.483c0-.384.31-.695.694-.695h1.041v-16.312H.695A.694.694 0 010 99.957V81.215c0-.383.31-.694.694-.694h1.041V57.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BlackIcon;
/* prettier-ignore-end */
