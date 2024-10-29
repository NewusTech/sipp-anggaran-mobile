import React, { ReactNode, useState } from "react";
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
import View from "../ui/view";

type accordion = {
  header: (isOpen: boolean) => ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Accordion({ header, children, style }: accordion) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentHeight = useSharedValue<number>(0);
  const animatedHeight = useSharedValue<number>(0);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    animatedHeight.value = withTiming(isOpen ? 0 : contentHeight.value, {
      duration: 300,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
    // opacity: animatedHeight.value === 0 ? 0 : 1,
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    contentHeight.value = height;
  };

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
