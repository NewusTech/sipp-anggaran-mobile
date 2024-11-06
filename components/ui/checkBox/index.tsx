import { StyleSheet } from "react-native";

import { useAppTheme } from "@/context/theme-context";

import View from "../view";
import { IconChecklist } from "@/components/icons/IconCiChecklist";

export type CheckboxProps = {
  selected?: boolean;
  width?: number;
  height?: number;
};
export function Checkbox(props: CheckboxProps) {
  const { selected = false, width = 16, height = 16 } = props;

  const { Colors } = useAppTheme();

  return (
    <View
      backgroundColor={selected ? "Primary Blue-20" : "Background 100"}
      style={[
        styles.container,
        { borderColor: Colors["Line 300"], borderRadius: 10, width, height },
      ]}
    >
      {selected && <IconChecklist size={15} color="Primary Blue" />}
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
