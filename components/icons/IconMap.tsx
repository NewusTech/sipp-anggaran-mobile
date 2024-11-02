import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconMap({
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
        d="M11 5.5C10.3201 5.5 9.65552 5.70161 9.09023 6.07932C8.52493 6.45704 8.08434 6.99391 7.82416 7.62203C7.56399 8.25015 7.49591 8.94131 7.62855 9.60812C7.76119 10.2749 8.08858 10.8874 8.56932 11.3682C9.05006 11.8489 9.66257 12.1763 10.3294 12.3089C10.9962 12.4416 11.6874 12.3735 12.3155 12.1133C12.9436 11.8532 13.4805 11.4126 13.8582 10.8473C14.2359 10.282 14.4375 9.61737 14.4375 8.9375C14.4375 8.02582 14.0753 7.15148 13.4307 6.50682C12.786 5.86216 11.9117 5.5 11 5.5ZM11 11C10.5921 11 10.1933 10.879 9.85414 10.6524C9.51496 10.4258 9.2506 10.1037 9.0945 9.72678C8.93839 9.34991 8.89755 8.93521 8.97713 8.53513C9.05671 8.13504 9.25315 7.76754 9.54159 7.47909C9.83004 7.19065 10.1975 6.99421 10.5976 6.91463C10.9977 6.83505 11.4124 6.87589 11.7893 7.032C12.1662 7.1881 12.4883 7.45246 12.7149 7.79164C12.9415 8.13081 13.0625 8.52958 13.0625 8.9375C13.0625 9.48451 12.8452 10.0091 12.4584 10.3959C12.0716 10.7827 11.547 11 11 11ZM11 1.375C8.995 1.37727 7.07277 2.17477 5.65502 3.59252C4.23727 5.01027 3.43977 6.9325 3.4375 8.9375C3.4375 11.6359 4.68445 14.4959 7.04688 17.209C8.10839 18.4349 9.30312 19.5389 10.609 20.5004C10.7246 20.5814 10.8623 20.6248 11.0034 20.6248C11.1446 20.6248 11.2823 20.5814 11.3979 20.5004C12.7013 19.5385 13.8938 18.4346 14.9531 17.209C17.3121 14.4959 18.5625 11.6359 18.5625 8.9375C18.5602 6.9325 17.7627 5.01027 16.345 3.59252C14.9272 2.17477 13.005 1.37727 11 1.375ZM11 19.0781C9.57945 17.9609 4.8125 13.8574 4.8125 8.9375C4.8125 7.29647 5.4644 5.72266 6.62478 4.56228C7.78516 3.4019 9.35897 2.75 11 2.75C12.641 2.75 14.2148 3.4019 15.3752 4.56228C16.5356 5.72266 17.1875 7.29647 17.1875 8.9375C17.1875 13.8557 12.4205 17.9609 11 19.0781Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
