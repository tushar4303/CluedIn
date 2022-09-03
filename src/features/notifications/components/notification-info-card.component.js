import React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { Divider } from "react-native-paper";
// import eventAvailable from "../../../../assets/eventAvailable.svg";

function UIComponent({ onPress, style, notification = {} }) {
  const {
    messageId = "1",
    role = "Principal",
    name = "Prasanna Nambiar",
    label = "https://img.icons8.com/material-outlined/96/000000/today.png",
    profilePic = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpbmNpcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    message_title = "Engineer's day on 15th!",
    message = `This is regarding the Engineer's day event which has been scheduled for 15th of Sept, 2022`,
    xDaysAgo = "15d",
  } = notification;

  return (
    <>
      <Divider />
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#f2f3f4" : "white",
            borderRadius: 8,
            paddingHorizontal: 16,
          },
        ]}
      >
        <View style={styles.notificationContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: profilePic,
              }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.sender} numberOfLines={1}>
              {role} @{name}
            </Text>

            <Text style={styles.title} numberOfLines={1}>
              {message_title}
            </Text>
            <View style={styles.lastContainer}>
              <View>
                <Image
                  style={styles.image2}
                  source={{
                    uri: label,
                  }}
                />
              </View>
              <View>
                <Text numberOfLines={3} style={styles.message}>
                  {message}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.lowerContainer}>
            <View>
              <Text style={styles.subTitle} numberOfLines={1}>
                {xDaysAgo}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  image2: {
    width: 24,
    height: 24,
    marginTop: 4,
    marginRight: 4,
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  sender: {
    fontWeight: "500",
    paddingBottom: 2,
    color: "#555555",
  },
  message: {
    fontWeight: "400",
    // fontSize: 14,
    paddingBottom: 2,
    marginRight: 6,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 2,
  },
});

export default UIComponent;
