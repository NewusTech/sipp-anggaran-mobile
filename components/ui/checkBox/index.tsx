import { StyleSheet } from "react-native";

import { useAppTheme } from "@/context/theme-context";

import View from "../view";
import { IconChecklist } from "@/components/icons/IconCiChecklist";

export type CheckboxProps = {
  selected?: boolean;
  width?: number;
  height?: number;
  borderRadius?: number;
};
export function Checkbox(props: CheckboxProps) {
  const {
    selected = false,
    width = 16,
    borderRadius = 10,
    height = 16,
  } = props;

  const { Colors } = useAppTheme();

  return (
    <View
      backgroundColor={selected ? "Line 300" : "Background 100"}
      style={[
        styles.container,
        { borderColor: Colors["Line 300"], borderRadius, width, height },
      ]}
    >
      {selected && <IconChecklist size={15} color="Background 100" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
