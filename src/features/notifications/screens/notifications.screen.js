import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { NotificationInfo } from "../components/notification-info-card.component";
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
    <View style={styles.list}>
      <NotificationInfo />
    </View>
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
    paddingLeft: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
