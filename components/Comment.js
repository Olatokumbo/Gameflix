import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import profile from "../assets/profile.jpg";
import axios from "axios";

export default function Comment({ data }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://192.168.137.1:8000/user/${data.userId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        navigation.goBack();
      });
  }, [data]);
  return (
    <View style={styles.comment}>
      {(!user) ? (
        <Avatar.Icon size={50} icon="account-circle" />
      ) : (
        <Avatar.Image
          size={50}
          source={{
            uri: `https://eu.ui-avatars.com/api/?name=${user.username}`,
          }}
        />
      )}
      <View style={styles.mainContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{user && user.username}</Text>
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
