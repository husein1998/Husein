// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 19"}
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
          "M12.204 9.955v-.002c-.116.008-.713.042-2.041.042-1.062 0-1.807-.029-2.07-.042v.002C4.009 9.777.963 9.073.963 8.228c0-.842 3.048-1.548 7.13-1.727v2.753c.266.019 1.032.064 2.089.064 1.269 0 1.903-.053 2.022-.064v-2.75c4.075.18 7.114.885 7.114 1.727 0 .842-3.041 1.546-7.114 1.727v-.003zm0-3.737V3.756h5.686V0H2.409v3.756h5.686v2.462C3.474 6.43 0 7.335 0 8.423c0 1.087 3.476 1.993 8.095 2.207v7.895h4.111V10.63c4.614-.21 8.082-1.117 8.082-2.205 0-1.084-3.468-1.993-8.082-2.204"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
