import React from "react";
import View from "../view";
import { StyleProp, ViewStyle } from "react-native";
import { AccordionProvider } from "./AccordionProvider";

type AccordionGroupProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AccordionGroup({
  children,
  style,
}: AccordionGroupProps) {
  return (
    <AccordionProvider>
      <View style={style}>{children}</View>
    </AccordionProvider>
  );
}
