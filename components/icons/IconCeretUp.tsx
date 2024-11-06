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
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M20.0307 15.5306C19.961 15.6003 19.8783 15.6557 19.7873 15.6934C19.6962 15.7311 19.5986 15.7506 19.5001 15.7506C19.4015 15.7506 19.3039 15.7311 19.2128 15.6934C19.1218 15.6557 19.0391 15.6003 18.9694 15.5306L12.0001 8.56029L5.03068 15.5306C4.88995 15.6713 4.69907 15.7504 4.50005 15.7504C4.30103 15.7504 4.11016 15.6713 3.96943 15.5306C3.8287 15.3899 3.74963 15.199 3.74963 15C3.74963 14.801 3.8287 14.6101 3.96943 14.4694L11.4694 6.96935C11.5391 6.89962 11.6218 6.8443 11.7128 6.80656C11.8039 6.76882 11.9015 6.74939 12.0001 6.74939C12.0986 6.74939 12.1962 6.76882 12.2873 6.80656C12.3783 6.8443 12.461 6.89962 12.5307 6.96935L20.0307 14.4694C20.1004 14.539 20.1557 14.6217 20.1935 14.7128C20.2312 14.8038 20.2506 14.9014 20.2506 15C20.2506 15.0985 20.2312 15.1961 20.1935 15.2872C20.1557 15.3782 20.1004 15.4609 20.0307 15.5306Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}