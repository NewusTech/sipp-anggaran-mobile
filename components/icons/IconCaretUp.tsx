import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconCaretUp({
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
      style={{
        marginTop: 5,
      }}
      {...rest}
    >
      <Path
         d="M14.8747 8.43757L1.12465 8.43789C0.988598 8.438 0.85557 8.39774 0.74241 8.32221C0.62925 8.24668 0.541046 8.13926 0.488964 8.01357C0.436881 7.88789 0.423261 7.74957 0.44983 7.61613C0.476399 7.4827 0.541962 7.36015 0.638217 7.264L7.51306 0.388835C7.5769 0.324913 7.65273 0.274202 7.73619 0.239602C7.81965 0.205002 7.90911 0.187192 7.99946 0.18719C8.08981 0.187187 8.17927 0.204994 8.26273 0.23959C8.34619 0.274186 8.42202 0.324893 8.48587 0.388812L15.361 7.26365C15.4573 7.3598 15.5229 7.48235 15.5494 7.61578C15.576 7.74921 15.5624 7.88753 15.5103 8.01322C15.4582 8.13891 15.37 8.24633 15.2569 8.32187C15.1437 8.39741 15.0107 8.43767 14.8747 8.43757Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
