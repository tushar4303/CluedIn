import React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import styled from "styled-components";

function UIComponent({ onPress, style }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpbmNpcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.sender} numberOfLines={1}>
            Principal @Prasanna Nambiar
          </Text>

          <Text style={styles.title} numberOfLines={1}>
            Engineer's day on 15th!
          </Text>
          <View style={styles.lastContainer}>
            <View>
              <Image
                style={styles.image2}
                source={{
                  uri: "https://img.icons8.com/material-outlined/96/000000/today.png",
                }}
              />
            </View>
            <View>
              <Text numberOfLines={2} style={styles.message}>
                This is regarding the Engineer's day event which has been
                scheduled for 15th of Sept, 2022
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <View>
            <Text style={styles.subTitle} numberOfLines={1}>
              15d
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
    // borderRadius: 14.5,

    marginRight: 8,
  },

  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  sender: {
    fontWeight: "500",
    paddingBottom: 2,
    color: "#555555",
  },
  message: {
    fontWeight: "400",
    paddingBottom: 2,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 2,
  },
});

export default UIComponent;
