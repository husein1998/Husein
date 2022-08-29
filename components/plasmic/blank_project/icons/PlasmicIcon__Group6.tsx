// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 79"}
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
          "M25.92 2.275c7.845-2.935 16.675-2.942 24.669-.53 10.405 3.23 19.188 11.082 23.778 20.938 1.266 2.807 2.479 5.735 2.6 8.857-5.85-3.39-12.261-5.587-18.687-7.59-10.278-3.706-21.038-6.279-30.766-11.37-2.265-1.354-5.152-2.741-5.769-5.562-.248-2.439 2.332-3.799 4.174-4.743zM2.235 25.993C4.505 19.829 8.23 14.107 13.29 9.866c1.286 10.58 5.788 20.804 13.225 28.495 8.918 9.266 21.621 14.955 34.545 14.74 5.133.161 10.151-1.025 15.156-1.983-4.925 17.795-24.428 29.607-42.498 26.767C22.81 76.49 12.74 70.032 6.663 60.913-.19 50.837-1.919 37.457 2.235 25.993z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
