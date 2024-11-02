import { useAppTheme } from "@/context/theme-context";
import View, { ViewProps } from "../view";
import { AppColorUnion } from "@/constants";

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  width?: any;
  color?: AppColorUnion;
} & ViewProps;
export default function Separator(props: SeparatorProps) {
  const {
    orientation = "horizontal",
    thickness = 1,
    style,
    width = "100%",
    color = "Line 400",
  } = props;

  const { Colors } = useAppTheme();

  return (
    <View
      style={[
        {
          width: orientation === "horizontal" ? width : thickness,
          height: orientation === "horizontal" ? thickness : width,
          backgroundColor: Colors[color],
        },
        style,
      ]}
    ></View>
  );
}
