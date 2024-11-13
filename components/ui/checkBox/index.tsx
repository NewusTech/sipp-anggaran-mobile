import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useAppTheme } from "@/context/theme-context";

import View from "../view";
import { IconChecklist } from "@/components/icons/IconCiChecklist";

export type CheckboxProps = {
  selected?: boolean;
  width?: number;
  height?: number;
  onPress?: () => void;
  label?: string; // Optional label for the checkbox
};

export function Checkbox(props: CheckboxProps) {
  const { selected = false, width = 16, height = 16, onPress, label } = props;
  const { Colors } = useAppTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        backgroundColor={selected ? "Primary Blue-20" : "Background 100"}
        style={[
          styles.container,
          { borderColor: Colors["Line 300"], borderRadius: 10, width, height },
        ]}
      >
        {selected && <IconChecklist size={15} color="Primary Blue" />}
      </View>
      {label && (
        <Text style={styles.label}>{label}</Text> // Render the label within a <Text> component
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 4,
    color: "black", // Change this according to your theme
    fontSize: 14,
  },
});
