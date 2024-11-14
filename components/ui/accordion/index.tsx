import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Pressable,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import View from "../view";
import { useAccordionContext } from "./AccordionProvider";

type AccordionProps = {
  header: (isOpen: boolean) => ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  index?: number; // Tambahkan prop index untuk penggunaan dalam grup
};

export default function Accordion({
  header,
  children,
  style,
  index,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const context = useAccordionContext();

  // Jika Accordion digunakan dalam grup, gunakan status dari context
  const isAccordionOpen = context ? context.openIndex === index : isOpen;
  const toggleAccordion = () => {
    if (context && typeof index === "number") {
      context.setOpenIndex(context.openIndex === index ? null : index);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  const contentHeight = useSharedValue<number>(0);
  const animatedHeight = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      contentHeight.value = height;
      if (isAccordionOpen) {
        animatedHeight.value = withTiming(height, { duration: 300 });
      }
    },
    [isAccordionOpen]
  );

  useEffect(() => {
    animatedHeight.value = withTiming(
      isAccordionOpen ? contentHeight.value : 0,
      {
        duration: 300,
      }
    );
  }, [contentHeight.value, isAccordionOpen]);

  return (
    <View style={style}>
      <Pressable onPress={toggleAccordion}>{header(isAccordionOpen)}</Pressable>
      <Animated.View
        style={[
          {
            overflow: "scroll",
          },
          animatedStyle,
        ]}
      >
        <View onLayout={onLayout} style={{ height: "auto" }}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}
