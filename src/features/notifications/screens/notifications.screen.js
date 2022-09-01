import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import UIComponent from "../components/notification-info-card.component";
import { Text as PaperText, Chip, Divider } from "react-native-paper";

export const NotificationsScreen = () => (
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
  </SafeAreaView>
);

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
