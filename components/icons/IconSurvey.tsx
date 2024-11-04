import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconSurvey({
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
      viewBox="0 0 31 30"
      fill="none"
      {...rest}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.083 2.5V27.5C7.70801 26.875 2.83301 21.5 2.83301 15C2.83301 8.5 7.70801 3.125 14.083 2.5ZM16.583 2.5V13.75H27.833C27.208 7.75 22.583 3.125 16.583 2.5ZM16.583 16.25V27.5C22.458 26.875 27.208 22.25 27.833 16.25H16.583Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
