import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import UIComponent from "../components/notification-info-card.component";
import { Text as PaperText, Chip, Divider } from "react-native-paper";
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
      <Divider />
      <FlatList
        data={[
          { messageId: 1 },
          { messageId: 2 },
          { messageId: 3 },
          { messageId: 4 },
          { messageId: 5 },
          { messageId: 6 },
          { messageId: 7 },
          { messageId: 8 },
          { messageId: 9 },
          { messageId: 10 },
        ]}
        renderItem={() => <UIComponent />}
        keyExtractor={(item) => item.messageId}
      />
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
          container: {
            borderRadius: 15,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f2f3f4" : "white",
            },
            styles.wrapperCustom,
          ]}
        >
          <Text style={{ justifyContent: "center", textAlign: "center" }}>
            Placement
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f2f3f4" : "white",
            },
            styles.wrapperCustom,
          ]}
        >
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginHorizontal: 16,
            }}
          >
            Placement
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f2f3f4" : "white",
            },
            styles.wrapperCustom,
          ]}
        >
          <Text style={{ justifyContent: "center", textAlign: "center" }}>
            Placement
          </Text>
        </Pressable>
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
