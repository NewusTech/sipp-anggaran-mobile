import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconCaretFillLeft({
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
        d="M7.56245 4.12505V17.8751C7.56234 18.0111 7.6026 18.1441 7.67814 18.2573C7.75368 18.3705 7.86109 18.4587 7.98678 18.5107C8.11247 18.5628 8.25079 18.5764 8.38422 18.5499C8.51765 18.5233 8.6402 18.4577 8.73635 18.3615L15.6114 11.4865C15.6753 11.4226 15.726 11.3468 15.7606 11.2633C15.7952 11.1799 15.813 11.0904 15.813 11.0001C15.813 10.9097 15.7952 10.8202 15.7606 10.7368C15.726 10.6533 15.6753 10.5775 15.6114 10.5136L8.73635 3.63865C8.6402 3.54239 8.51765 3.47682 8.38422 3.45025C8.25079 3.42368 8.11247 3.4373 7.98678 3.48938C7.86109 3.54145 7.75368 3.62966 7.67814 3.74282C7.6026 3.85597 7.56234 3.989 7.56245 4.12505Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
