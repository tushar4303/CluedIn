import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

export const NotificationInfo = ({ notification = {} }) => {
  const {
    role = "Principal",
    name = "Prasanna Nambiar",
    LabelIcon,
    photo = ["C:Users/padhy/Downloads/principal.jpg"],
    message = "Announcement regarding the App launch of CluedIn developed under CSI student chapter",
    recievedWhen = "12d",
  } = notification;
  return (
    <View styles={styles.container}>
      <Text>
        My notification comes from `{role}/{name}`
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
});
