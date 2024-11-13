import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconCeretFillUp({
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
      viewBox="0 0 22 22"
      fill="none"
      {...rest}
    >
      <Path
        d="M17.8749 14.4376L4.1249 14.4379C3.98884 14.438 3.85581 14.3977 3.74265 14.3222C3.62949 14.2467 3.54129 14.1393 3.48921 14.0136C3.43713 13.8879 3.42351 13.7496 3.45007 13.6161C3.47664 13.4827 3.54221 13.3601 3.63846 13.264L10.5133 6.38884C10.5771 6.32491 10.653 6.2742 10.7364 6.2396C10.8199 6.205 10.9094 6.18719 10.9997 6.18719C11.0901 6.18719 11.1795 6.20499 11.263 6.23959C11.3464 6.27419 11.4223 6.32489 11.4861 6.38881L18.3613 13.2637C18.4575 13.3598 18.5231 13.4823 18.5497 13.6158C18.5763 13.7492 18.5626 13.8875 18.5106 14.0132C18.4585 14.1389 18.3703 14.2463 18.2571 14.3219C18.144 14.3974 18.0109 14.4377 17.8749 14.4376Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
