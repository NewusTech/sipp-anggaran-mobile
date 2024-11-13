import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconMapMarker({
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
      viewBox="0 0 35 35"
      fill="none"
      {...rest}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 2.91675C9.45004 2.91675 2.91671 9.45008 2.91671 17.5001C2.91671 19.7459 3.44171 21.8459 4.33129 23.7563L1.45837 33.5417L11.2438 30.6688C13.1542 31.5584 15.2542 32.0834 17.5 32.0834C25.55 32.0834 32.0834 25.5501 32.0834 17.5001C32.0834 9.45008 25.55 2.91675 17.5 2.91675ZM23.3334 18.9584H18.9584V23.3334H16.0417V18.9584H11.6667V16.0417H16.0417V11.6667H18.9584V16.0417H23.3334V18.9584Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
