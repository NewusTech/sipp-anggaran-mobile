import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconReport2({
  width = 24,
  height = 24,
  color = "Text 900",
  ...rest
}: IconProps) {
  const { Colors } = useAppTheme();

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.25 11.25H23.125L16.25 4.375V11.25ZM7.5 2.5H17.5L25 10V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V5C5 3.6125 6.1125 2.5 7.5 2.5ZM8.75 25H11.25V17.5H8.75V25ZM13.75 25H16.25V15H13.75V25ZM18.75 25H21.25V20H18.75V25Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
