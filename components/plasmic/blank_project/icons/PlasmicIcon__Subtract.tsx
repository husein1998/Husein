// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 224 485"}
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
          "M2.572 12.886C0 17.935 0 24.544 0 37.762v408.643c0 13.217 0 19.826 2.572 24.875a23.602 23.602 0 0010.314 10.314c5.049 2.572 11.658 2.572 24.876 2.572H186.1c13.218 0 19.827 0 24.875-2.572a23.597 23.597 0 0010.314-10.314c2.573-5.049 2.573-11.658 2.573-24.875V37.762c0-13.218 0-19.827-2.573-24.876a23.596 23.596 0 00-10.314-10.314C205.927 0 199.318 0 186.1 0h-11.6c-.574 0-.861 0-1.091.084-.386.14-.69.444-.83.83-.084.23-.084.517-.084 1.091 0 4.597 0 6.895-.67 8.735a11.107 11.107 0 01-6.638 6.638c-1.84.67-4.138.67-8.734.67H67.409c-4.596 0-6.894 0-8.735-.67a11.107 11.107 0 01-6.638-6.638c-.67-1.84-.67-4.138-.67-8.735 0-.574 0-.861-.083-1.092a1.388 1.388 0 00-.83-.83C50.223 0 49.936 0 49.361 0h-11.6C24.544 0 17.935 0 12.886 2.572A23.601 23.601 0 002.572 12.886z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
