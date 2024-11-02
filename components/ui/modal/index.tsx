import React from "react";
import { Modal, Pressable, TouchableOpacity } from "react-native";
import { Typography } from "../typography";
import { useAppTheme } from "@/context/theme-context";
import Loader from "../loader";
import Animated, { SlideInDown } from "react-native-reanimated";
import View from "../view";

type ModalAction = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

export default function Modals({ visible, setVisible, children }: ModalAction) {
  const { Colors } = useAppTheme();
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Pressable
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(20, 21, 17, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setVisible(false)}
      >
        <Animated.View
          entering={SlideInDown}
          style={{
            width: "80%",
            height: "auto",
            padding: 20,
            borderRadius: 15,
            justifyContent: "center",
            gap: 20,
            backgroundColor: Colors["Background 100"],
          }}
        >
          {children}
        </Animated.View>
      </Pressable>
    </Modal>
  );
}
