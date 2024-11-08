import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconFisik({
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
        d="M17.7288 18.9651L20.38 16.3138L27.875 23.8088L25.2237 26.4601L17.7288 18.9651ZM22.375 12.5001C24.7875 12.5001 26.75 10.5376 26.75 8.12507C26.75 7.40007 26.55 6.72507 26.2375 6.12507L22.8625 9.50007L21 7.63757L24.375 4.26257C23.775 3.95007 23.1 3.75007 22.375 3.75007C19.9625 3.75007 18 5.71257 18 8.12507C18 8.63757 18.1 9.12507 18.2625 9.57507L15.95 11.8876L13.725 9.66257L14.6125 8.77507L12.85 7.01257L15.5 4.36257C14.7969 3.66032 13.8438 3.26587 12.85 3.26587C11.8562 3.26587 10.9031 3.66032 10.2 4.36257L5.775 8.78757L7.5375 10.5501H4.0125L3.125 11.4376L7.55 15.8626L8.4375 14.9751V11.4376L10.2 13.2001L11.0875 12.3126L13.3125 14.5376L4.05 23.8001L6.7 26.4501L20.925 12.2376C21.375 12.4001 21.8625 12.5001 22.375 12.5001Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}
