import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconCaretFillDown({
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
        d="M17.8757 7.563L4.12571 7.56437C3.98966 7.56428 3.85664 7.60455 3.74349 7.6801C3.63034 7.75565 3.54215 7.86307 3.49008 7.98876C3.43801 8.11446 3.42441 8.25278 3.45099 8.38621C3.47758 8.51964 3.54316 8.64218 3.63942 8.73832L10.5151 15.6126C10.579 15.6766 10.6548 15.7273 10.7383 15.7618C10.8217 15.7964 10.9112 15.8142 11.0015 15.8142C11.0919 15.8142 11.1813 15.7964 11.2648 15.7618C11.3483 15.7272 11.4241 15.6765 11.4879 15.6125L18.3622 8.73686C18.4585 8.6407 18.524 8.51815 18.5506 8.38471C18.5772 8.25127 18.5635 8.11296 18.5114 7.98727C18.4593 7.86159 18.3711 7.75418 18.258 7.67866C18.1448 7.60313 18.0118 7.56288 17.8757 7.563Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
