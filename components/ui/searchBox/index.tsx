import { ReactNode, useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { useAppTheme } from "@/context/theme-context";

import { IconMagnifyingGlass } from "../../icons";
import Animated, { SlideInLeft } from "react-native-reanimated";
import View from "../view";

export type SearchBoxProps = {
  trailingIcon?: ReactNode;
  width?: number | any;
} & TextInputProps;
export function SearchBox(props: SearchBoxProps) {
  const { trailingIcon, width, ...rest } = props;

  const { Colors } = useAppTheme();
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View
      backgroundColor="Background 100"
      style={[
        style.container,
        {
          borderColor: focused ? Colors["Primary 500"] : Colors["Line 300"],
          width: width,
          overflow: "hidden",
        },
      ]}
    >
      {!focused && (
        <Animated.View entering={SlideInLeft}>
          <IconMagnifyingGlass
            width={24}
            height={24}
            color={focused ? "Primary 500" : "Line 300"}
          />
        </Animated.View>
      )}
      <TextInput
        selectionColor={Colors["Primary 500"]}
        style={{ flex: 1, color: Colors["Primary 500"] }}
        placeholderTextColor={Colors["Line 300"]}
        {...rest}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        keyboardType="web-search"
        returnKeyType="search" // Mengubah tombol keyboard menjadi "Search"
      />
      {trailingIcon}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
  },
});
