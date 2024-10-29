import { View as RNView, ViewProps as RNViewProps } from "react-native";

import { AppColorUnion } from "@/constants";
import { useAppTheme } from "@/context";

export type ViewProps = {
  backgroundColor?: AppColorUnion | "transparent";
  borderColor?: AppColorUnion;
} & RNViewProps;
export default function View(props: ViewProps) {
  const {
    children,
    backgroundColor = "transparent",
    borderColor,
    style,
    ...rest
  } = props;

  const { Colors } = useAppTheme();

  return (
    <RNView
      style={[
        {
          backgroundColor:
            Colors[backgroundColor as AppColorUnion] || "transparent",
          borderColor: Colors[borderColor as AppColorUnion],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNView>
  );
}
