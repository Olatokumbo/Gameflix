import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import profile from "../assets/profile.jpg";

export default function Comment({ data }) {
  return (
    <View style={styles.comment}>
      <Avatar.Icon size={50} icon="account-circle" />
      <View style={styles.mainContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{data.userId}</Text>
          <FontAwesome name="star" color="#FBC53A" size={15} />
          <Text style={styles.ratings}>{data.rating}</Text>
        </View>
        <Text style={styles.message}>{data.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    // transform: [{ scaleY: -1 }],
    borderTopWidth: 2,
    borderColor: "#2d2d2d",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratings: {
    color: "white",
    marginLeft: 5,
    color: "#FBC53A",
  },
  mainContent: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    color: "#a5a5a5",
    fontSize: 13,
    marginRight: 10,
  },
  message: {
    color: "white",
    fontSize: 14,
  },
});
