// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 117 17"}
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
          "M0 .27h7.466c1.852 0 3.253.48 4.204 1.439a3.72 3.72 0 011.1 2.716v.045c.007.413-.05.824-.17 1.22a3.744 3.744 0 01-1.12 1.707c-.25.215-.522.4-.813.552.84.293 1.595.787 2.2 1.44.534.607.801 1.447.801 2.519v.045c.015.67-.13 1.333-.425 1.934a3.77 3.77 0 01-1.216 1.382 5.77 5.77 0 01-1.907.828c-.809.191-1.638.284-2.469.276H0V.269zm6.718 6.51a3.692 3.692 0 001.864-.402 1.391 1.391 0 00.686-1.3v-.046A1.423 1.423 0 008.671 3.8c-.399-.283-.974-.425-1.725-.425H3.452V6.78h3.266zm.943 6.49a3.407 3.407 0 001.847-.424 1.459 1.459 0 00.667-1.325v-.045a1.515 1.515 0 00-.622-1.276c-.412-.32-1.08-.48-2-.48h-4.1v3.55H7.66zm10.455-13h3.544v16.108h-3.544V.268zm8.906 0h3.268l7.552 9.913V.269h3.498v16.109h-3.016l-7.8-10.24v10.24h-3.502V.268zM52.07.154h3.262l6.902 16.223h-3.7l-1.472-3.613H50.25l-1.473 3.613h-3.614L52.07.154zm3.727 9.482L53.653 4.41l-2.136 5.226h4.28zM66.066.27h3.268l7.547 9.913V.269h3.498v16.109h-3.015l-7.8-10.24v10.24h-3.498V.268zm27.067 16.39a8.379 8.379 0 01-3.291-.643 7.958 7.958 0 01-4.35-4.395 8.527 8.527 0 01-.621-3.246v-.045a8.358 8.358 0 012.348-5.88A7.974 7.974 0 0189.86.655 8.613 8.613 0 0193.262 0c.69-.005 1.38.056 2.058.184.58.11 1.148.28 1.694.507.495.208.966.47 1.404.782.427.304.828.642 1.2 1.012l-2.254 2.6a8.569 8.569 0 00-1.919-1.335 4.912 4.912 0 00-2.198-.48 4.457 4.457 0 00-3.358 1.473 5.063 5.063 0 00-.97 1.6 5.488 5.488 0 00-.343 1.946v.045a5.568 5.568 0 00.343 1.944c.218.59.544 1.137.96 1.61a4.43 4.43 0 003.359 1.497 4.923 4.923 0 002.334-.507 9.022 9.022 0 001.898-1.381l2.255 2.279c-.398.432-.829.833-1.288 1.2a7.68 7.68 0 01-1.461.909 7.572 7.572 0 01-1.737.573c-.694.139-1.4.207-2.107.201zM103.908.27h12.123v3.152h-8.637V6.69h7.605v3.152h-7.593v3.383h8.745v3.153h-12.236l-.007-16.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */