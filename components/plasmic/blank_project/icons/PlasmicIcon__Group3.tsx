// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 122 22"}
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
          "M16.236 4.729c.812-1.419 1.596-2.853 2.42-4.265h4.402a.909.909 0 01.19.03c-.147.222-.27.457-.399.688a2670.88 2670.88 0 00-3.176 5.72c-.443.777-.856 1.571-1.305 2.344l-.045.015-.008.097a3929.99 3929.99 0 00-6.19 11.149c-4.04.004-8.083.004-12.125 0 .23-.48.502-.94.758-1.407 1.151-2.117 2.332-4.215 3.467-6.332 2.483-.004 4.967-.004 7.45 0 1.534-2.671 3.035-5.364 4.557-8.04h.004zM61.672.41v20.34h3.525V6.447l6.43 9.421 6.377-9.645v14.528h3.628V.41H77.73L71.652 9.8 65.506.41h-3.834zM45.185 5.656h2.304v15.267h-2.304V5.655zM44.987 0h2.7v2.561h-2.7V0zm6.903 1.281h2.407v4.375h4.745v2.132h-4.745v9.07c-.005.349.077.694.236 1.005.407.774 1.514 1.692 4.509.619v1.976s-2.734 1.548-5.21.139c0 0-1.23-.522-1.746-2.284-.134-.472-.2-.96-.196-1.452V7.754l-2.029.034V5.656h2.046L51.89 1.28zM85.346.41v20.479h15.301v-3.301h-11.57v-5.434h10.195V8.905H89.059V3.731h11.468V.41H85.346zm16.736 0h4.359l5.003 7.19 4.963-7.19h4.359l-7.118 9.987 7.561 10.474h-4.59l-5.158-7.65-5.407 7.668h-4.358l7.452-10.401L102.082.41zm-63.946 9.854s3.37-1.272 3.163-4.934c0 0-.027-3.522-3.993-4.609a7.634 7.634 0 00-2.021-.26h-9.51l.026 20.342h10.238s5.99-.13 6.413-5.467c0 0 .429-3.731-4.316-5.072zM28.233 2.56h6.07c4.761-.016 4.624 3.336 4.624 3.336.071 3.825-4.298 3.748-4.298 3.748h-6.396V2.56zm7.427 16.092h-7.427V11.57h7.101c4.762-.018 4.624 3.335 4.624 3.335.072 3.824-4.298 3.747-4.298 3.747z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
