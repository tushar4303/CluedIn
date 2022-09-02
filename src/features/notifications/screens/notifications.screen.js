import React, { useCallback, useRef, useState, useMemo } from "react";
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
import RBSheet from "react-native-raw-bottom-sheet";

export const NotificationsScreen = () => {
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <PaperText variant="headlineSmall">Notifications</PaperText>
      </View>
      <View style={styles.chip}>
        <Chip onPress={() => refRBSheet.current.open()} compact="true">
          Label
        </Chip>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        dragFromTopOnly={true}
        closeOnPressBack={true}
        customStyles={{
          wrapper: {
            // backgroundColor: "transparent",
            shadowOpacity: 20,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Text>hello</Text>
      </RBSheet>
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
