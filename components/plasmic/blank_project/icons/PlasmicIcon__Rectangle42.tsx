// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle42Icon(props: Rectangle42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 280 573"}
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

      <g filter={"url(#01l2Ff6o16a)"}>
        <path
          d={
            "M0 64.953C0 42.218 0 30.85 4.425 22.166a40.596 40.596 0 0117.74-17.741C30.85 0 42.219 0 64.954 0h149.19c22.736 0 34.104 0 42.788 4.425a40.599 40.599 0 0117.741 17.74c4.425 8.685 4.425 20.053 4.425 42.788v442.729c0 22.736 0 34.104-4.425 42.788a40.596 40.596 0 01-17.741 17.741c-8.684 4.425-20.052 4.425-42.788 4.425H64.953c-22.735 0-34.103 0-42.787-4.425A40.593 40.593 0 014.425 550.47C0 541.786 0 530.418 0 507.682V64.953z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"01l2Ff6o16a"}
          x={"0"}
          y={"0"}
          width={"279.097"}
          height={"572.636"}
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

          <feGaussianBlur stdDeviation={"11.375"}></feGaussianBlur>

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
            result={"effect1_innerShadow_110_1877"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle42Icon;
/* prettier-ignore-end */
