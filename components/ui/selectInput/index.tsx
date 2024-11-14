import { ReactNode } from "react";
import { Image, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import { useAppTheme } from "@/context/theme-context";
import View from "../view";
import { AppColorUnion } from "@/constants";
import { Typography } from "../typography";
import { IconMagnifyingGlass } from "@/components/icons";

export type DataItem = {
  title: string | number;
  image?: string;
};
export type SelectInputProps = {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  withBorder?: boolean;
  borderRadius?: number;
  gap?: number;
  padding?: number;
  paddingHorizontal?: number;
  data: DataItem[];
  onSelect: (selectedItem: DataItem, index: number) => void;
  value: string | number;
  placeholder?: string;
  suffix?: string;
  label?: string;
  disabled?: boolean;
  color?: AppColorUnion;
  width?: any;
};
export function SelectInput(props: SelectInputProps) {
  const {
    leadingIcon,
    trailingIcon,
    value,
    withBorder = true,
    borderRadius = 10,
    gap = 12,
    padding = 8,
    paddingHorizontal = padding,
    data = [],
    onSelect = () => {},
    placeholder = "",
    suffix = "",
    label,
    disabled = false,
    color = "Line 200",
    width,
  } = props;

  const { Colors } = useAppTheme();

  return (
    <SelectDropdown
      disabled={disabled}
      data={data}
      onSelect={onSelect}
      renderButton={(selected, isOpened) => (
        <View style={{ gap: 5 }}>
          {label && (
            <Typography fontFamily="Poppins-Medium" fontSize={14}>
              {label}
            </Typography>
          )}
          <View
            // backgroundColor={selected ? "line-stroke-30" : "white"}
            style={[
              styles.container,
              {
                width,
                borderWidth: withBorder ? 1 : 0,
                borderColor: isOpened ? Colors["Primary 500"] : Colors[color],
                padding: withBorder ? padding : 0,
                paddingHorizontal,
                borderRadius,
                gap,
                backgroundColor: disabled ? Colors["Line 100"] : "transparent",
              },
            ]}
          >
            {leadingIcon}
            <Typography
              fontSize={14}
              color={value ? "Text 900" : "Text 500"}
              style={styles.textInput}
              numberOfLines={1}
            >
              {value || placeholder} {" " + suffix}
            </Typography>

            {trailingIcon}
          </View>
        </View>
      )}
      search
      searchInputStyle={{
        backgroundColor: Colors["Background 100"],
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
      }}
      searchInputTxtColor={"#151E26"}
      searchPlaceHolder={"Search here"}
      searchPlaceHolderColor={"#72808D"}
      renderSearchInputLeftIcon={() => {
        return <IconMagnifyingGlass />;
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={[
              styles.dropdownItemStyle,
              {
                ...(isSelected && { backgroundColor: Colors["Primary 500"] }),
              },
            ]}
          >
            {item.image && (
              <Image style={{ width: 18, height: 18 }} source={item.image} />
            )}
            <Typography color={isSelected ? "Background 100" : "Text 900"}>
              {item.title} {suffix}
            </Typography>
          </View>
        );
      }}
      dropdownStyle={{
        backgroundColor: Colors["Background 100"],
        transform: [{ translateY: -20 }],
      }}
      dropdownOverlayColor="transparent"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  dropdownItemStyle: {
    padding: 8,
    borderRadius: 0,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  searchInput: {
    height: 40,
  },
});
