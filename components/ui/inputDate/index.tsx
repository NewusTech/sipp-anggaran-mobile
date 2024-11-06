import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { BlurView } from "expo-blur";

import { useAppTheme } from "@/context/theme-context";
import { TextInputV2, TextInputV2Props } from "../textInputV2";
import { Typography } from "../typography";
import React from "react";
import { AppColor, AppColorUnion, formatDate } from "@/constants";
import { IconCross } from "@/components/icons";
import DateTimePicker from "react-native-ui-datepicker";
import View from "../view";

export type DateInputProps = {
  value: Date | string;
  onChange: (date: Date | undefined) => void;
  label?: string;
  disabledDates?: string[];
  minDate?: Date | string;
  color?: AppColorUnion;
  errorMessage?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
} & Pick<
  TextInputV2Props,
  "placeholder" | "trailingIcon" | "leadingIcon" | "withBorder"
>;

export type dateInnputDayProp = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

export function DateInput(props: DateInputProps) {
  const {
    value,
    onChange = () => {},
    placeholder,
    trailingIcon,
    leadingIcon,
    withBorder = false,
    label,
    disabledDates,
    color = "Line 300",
    errorMessage = "",
    disabled = false,
    style,
  } = props;

  const { Colors } = useAppTheme();
  const extracDate = (date: any) => new Date(date).toISOString().split("T")[0];

  const markedDates = disabledDates?.reduce((acc: any, date: any) => {
    acc[extracDate(date)] = {
      disabled: true,
      disableTouchEvent: true,
      selected: true,
      selectedColor: Colors["Line 300"],
    };
    return acc;
  }, {});

  console.log(value.toString());

  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={[style, { gap: 5 }]}>
      {label && (
        <Typography fontFamily="Poppins-Medium" fontSize={14}>
          {label}
        </Typography>
      )}
      <View
        backgroundColor={disabled ? "Text 100" : "transparent"}
        style={[
          styles.container,
          {
            borderWidth: withBorder ? 1 : 0,
            borderColor: Colors[color],
            padding: withBorder ? 12 : 0,
          },
        ]}
      >
        {placeholder && (
          <Typography
            fontFamily="OpenSans-Regular"
            fontSize={12}
            color={value ? "Text 800" : "Text 900"}
            style={styles.textPlaceholder}
          >
            {placeholder}
          </Typography>
        )}
        <TextInputV2
          trailingIcon={trailingIcon}
          leadingIcon={leadingIcon}
          value={
            value !== ""
              ? formatDate(new Date(value), {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "tanggal"
          }
          placeholder={placeholder}
          onTouchablePress={() =>
            !disabled && setShowDatePicker(!showDatePicker)
          }
          asTouchable
          withBorder={false}
        />
      </View>
      {!!errorMessage && (
        <Typography fontFamily="Poppins-Light" fontSize={10} color="Error 600">
          {errorMessage}
        </Typography>
      )}
      <Modal
        animationType="slide"
        transparent={false}
        visible={showDatePicker}
        onRequestClose={() => {
          setShowDatePicker(!showDatePicker);
        }}
      >
        <BlurView
          intensity={100}
          blurReductionFactor={100}
          experimentalBlurMethod="dimezisBlurView"
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <Pressable onPress={() => setShowDatePicker(false)}>
              <IconCross size={12} />
            </Pressable>
            <DateTimePicker
              mode="single"
              date={value || new Date()}
              onChange={(params) => {
                setShowDatePicker(false);
                onChange(params.date as Date);
              }}
            />
            {disabledDates && (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <View
                  style={[
                    styles.rounded,
                    { backgroundColor: Colors["Line 300"] },
                  ]}
                />
                <Typography
                  fontFamily="Poppins-Regular"
                  fontSize={12}
                  style={{ textAlignVertical: "center" }}
                >
                  Telah Terpesan
                </Typography>
              </View>
            )}
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 15,
  },
  textPlaceholder: {
    flex: 1,
    color: AppColor.light["Text 500"],
  },
  dropdownItemStyle: {
    padding: 8,
    borderRadius: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rounded: {
    height: 20,
    width: 20,
    borderRadius: 100,
  },
});
