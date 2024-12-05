import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { useAppTheme } from "@/context/theme-context";

import { IconProps } from "./icon";

export function IconMoneyHand({
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
        d="M14.1499 11.8744C17.4236 11.8744 20.0866 9.21097 20.0866 5.93721C20.0866 2.66345 17.4236 0 14.1499 0C10.8761 0 8.21265 2.66345 8.21265 5.93721C8.21265 9.21097 10.8761 11.8744 14.1499 11.8744ZM13.4467 2.44735V2.2861C13.4467 1.89751 13.7613 1.58297 14.1499 1.58297C14.538 1.58297 14.853 1.89751 14.853 2.2861V2.44829C15.6897 2.62782 16.3192 3.37314 16.3192 4.26283C16.3192 4.65095 16.0042 4.96595 15.6161 4.96595C15.2275 4.96595 14.913 4.65095 14.913 4.26283C14.913 4.01486 14.7109 3.81282 14.463 3.81282H13.8325C13.5845 3.81282 13.3825 4.01486 13.3825 4.26283C13.3825 4.40486 13.4505 4.53986 13.5649 4.62423L14.1499 5.05736L15.5711 6.10924C16.038 6.45471 16.3192 7.00737 16.323 7.58862V7.59518C16.3263 8.09112 16.1364 8.55893 15.7877 8.9119C15.5289 9.17393 15.2055 9.34972 14.853 9.42378V9.58831C14.853 9.97691 14.538 10.2914 14.1499 10.2914C13.7613 10.2914 13.4467 9.97691 13.4467 9.58831V9.42612C13.1036 9.353 12.7881 9.18425 12.5331 8.93206C12.1802 8.58378 11.9842 8.11878 11.9814 7.62284C11.9791 7.23471 12.2917 6.91783 12.6798 6.91549H12.6845C13.0708 6.91549 13.3853 7.22768 13.3877 7.6144C13.3886 7.85707 13.5838 8.06159 13.84 8.06159C14.2285 8.05924 14.0838 8.06009 14.4695 8.05784C14.7191 8.05587 14.9187 7.85332 14.9167 7.60455V7.59799C14.9158 7.45737 14.8478 7.3233 14.7344 7.2394L14.1499 6.80674L12.7281 5.75486C12.2575 5.40611 11.9763 4.8483 11.9763 4.26283C11.9763 3.37126 12.6077 2.62548 13.4467 2.44735Z"
        fill={Colors[color]}
      />
      <Path
        d="M4.53001 15.2529C4.34977 14.9404 3.94941 14.8317 3.63502 15.0131L0.327602 16.9223C0.0144288 17.1035 -0.093009 17.5041 0.0877884 17.8177L3.46814 23.6725C3.64908 23.9856 4.04939 24.0931 4.36313 23.9123L7.67055 22.0026C7.98419 21.8218 8.0912 21.4212 7.91036 21.1076L4.53001 15.2529Z"
        fill={Colors[color]}
      />
      <Path
        d="M23.4811 14.0841C23.1628 13.6421 22.5469 13.5422 22.1053 13.8605C20.7656 14.8257 18.1931 16.6791 17.9887 16.8268C17.8945 16.9069 17.7956 16.9796 17.6925 17.0438C17.2879 17.2983 16.8187 17.4343 16.3289 17.4343H12.9609C12.5728 17.4343 12.2578 17.1197 12.2578 16.7311C12.2578 16.3421 12.5732 16.028 12.9609 16.028H16.5628C17.092 16.028 17.5158 15.5874 17.4937 15.0572C17.4731 14.5542 17.0437 14.1642 16.5403 14.1642H13.7986C13.6129 13.9678 13.4095 13.7878 13.1915 13.6271C12.442 13.0744 11.5157 12.7477 10.5131 12.7477C8.73042 12.7477 6.95666 13.8708 6.22119 15.3699L9.09745 20.3513H14.4928C15.5522 20.3513 16.5956 20.0804 17.5139 19.5521C17.8322 19.3693 18.1729 19.1494 18.5423 18.8841C20.0901 17.7722 23.2547 15.4622 23.257 15.4608C23.6995 15.143 23.7998 14.5261 23.4811 14.0841Z"
        fill={Colors[color]}
      />
    </Svg>
  );
}