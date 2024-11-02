import { ReactNode, useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
} from "react-native";

import { useAppTheme } from "@/context/theme-context";

import { Typography } from "../typography";
import { IconEye, IconEyeSlice } from "../../icons";
import { AppColorUnion } from "@/constants/Colors";
import View from "../view";

export type TextInputProps = {
  label?: string;
  trailingIcon?: ReactNode;
  errorMessage?: string;
  borderRadius?: number;
  textAlignVertical?: "top" | "center";
  color?: AppColorUnion;
} & RNTextInputProps;
export default function TextInput(props: TextInputProps) {
  const {
    label = "",
    editable = true,
    style,
    errorMessage = "",
    secureTextEntry = false,
    trailingIcon,
    borderRadius = 100,
    textAlignVertical = "center",
    color = "Text 900",
    ...rest
  } = props;

  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const [focused, setFocused] = useState<boolean>(false);

  const { Colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Typography fontFamily="Poppins-Medium" fontSize={14}>
          {label}
        </Typography>
      )}
      <View
        backgroundColor={editable ? "transparent" : "Line 200"}
        style={[
          styles.inputWrapper,
          {
            borderColor:
              errorMessage.trim() !== ""
                ? Colors["Error 600"]
                : focused
                ? Colors[color]
                : Colors["Line 300"],
            borderRadius,
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <RNTextInput
            placeholderTextColor={Colors["Text 500"]}
            editable={editable}
            style={[{ color: Colors["Text 900"], textAlignVertical }, style]}
            secureTextEntry={secureTextEntry && hidePassword}
            {...rest}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </View>

        {trailingIcon ||
          (secureTextEntry && (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <View>
                {hidePassword ? (
                  <IconEye color="Text 500" />
                ) : (
                  <IconEyeSlice color="Text 500" />
                )}
              </View>
            </TouchableOpacity>
          ))}
      </View>

      {!!errorMessage && (
        <Typography fontFamily="Poppins-Light" fontSize={10} color="Error 600">
          {errorMessage}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
