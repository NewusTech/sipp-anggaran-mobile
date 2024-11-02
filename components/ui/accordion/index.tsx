import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Pressable,
  LayoutChangeEvent,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import View from "../view";

type AccordionProps = {
  header: (isOpen: boolean) => ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Accordion({ header, children, style }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentHeight = useSharedValue<number>(0);
  const animatedHeight = useSharedValue<number>(0);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    animatedHeight.value = withTiming(!isOpen ? contentHeight.value : 0, {
      duration: 300,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      contentHeight.value = height;
      if (isOpen) {
        animatedHeight.value = withTiming(height, { duration: 300 });
      }
    },
    [isOpen]
  );

  useEffect(() => {
    // Update the animated height whenever content height changes and accordion is open
    if (isOpen) {
      animatedHeight.value = withTiming(contentHeight.value, { duration: 300 });
    }
  }, [contentHeight.value, isOpen]);

  return (
    <View style={style}>
      <Pressable onPress={toggleAccordion}>{header(isOpen)}</Pressable>
      {/* Animated Accordion Content */}
      <Animated.View
        style={[
          {
            overflow: "scroll",
          },
          animatedStyle,
        ]}
      >
        {/* Measure the actual content height */}
        <View onLayout={onLayout} style={{ height: "auto" }}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}
