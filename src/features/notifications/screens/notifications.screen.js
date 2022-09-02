import React, { useCallback, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from "react-native";
import UIComponent from "../components/notification-info-card.component";
import { Text as PaperText, Chip } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export const NotificationsScreen = () => {
  const sheetRef = useRef < BottomSheet > null;
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%", "60%", "80%"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <PaperText variant="headlineSmall">Notifications</PaperText>
      </View>
      <View style={styles.chip}>
        <Chip compact="true">Label</Chip>
        <Chip compact="true" style={{ marginLeft: 8 }}>
          Unread
        </Chip>
        <Chip compact="true" style={{ marginLeft: 8 }}>
          filter
        </Chip>
      </View>
      <ScrollView style={styles.list}>
        <UIComponent />
        <UIComponent />
        <UIComponent />
        <UIComponent />
      </ScrollView>
      <BottomSheet
        style={{ backgroundColor: "grey" }}
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    padding: 16,
    fontWeight: "bold",
  },
  chip: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
});
