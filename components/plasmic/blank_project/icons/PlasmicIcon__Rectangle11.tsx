// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Icon(props: Rectangle11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 249 510"}
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

      <g filter={"url(#FLH9E0KFhha)"}>
        <path
          d={
            "M0 57.753C0 37.538 0 27.43 3.934 19.709A36.096 36.096 0 0119.71 3.934C27.428 0 37.538 0 57.752 0h132.651c20.215 0 30.323 0 38.044 3.934a36.098 36.098 0 0115.775 15.775c3.934 7.72 3.934 17.829 3.934 38.044v393.65c0 20.215 0 30.323-3.934 38.044a36.093 36.093 0 01-15.775 15.774c-7.721 3.934-17.829 3.934-38.044 3.934H57.753c-20.215 0-30.323 0-38.044-3.934a36.09 36.09 0 01-15.775-15.774C0 481.726 0 471.618 0 451.403V57.753z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"FLH9E0KFhha"}
          x={"0"}
          y={"0"}
          width={"248.157"}
          height={"509.155"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"10.065"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_110_1961"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle11Icon;
/* prettier-ignore-end */
