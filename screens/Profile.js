import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

export default function Profile() {
  return (
    <View style={styles.profile}>
      <View style={styles.topMain}>
        <Avatar.Icon size={100} icon="account-circle" />
        <View style={styles.textMain}>
          <Text style={styles.username}>JohnDoe</Text>
          <Text style={styles.email}>johndoe@gmail.com</Text>
        </View>
      </View>
      <View style={styles.bottomMain}>
        <Text style={styles.settings}>Settings</Text>
        <Text style={styles.signout}>Sign Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "black",
  },
  topMain: {
    paddingTop: 50,
    backgroundColor: "#161616",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textMain: {
    alignItems: "center",
    marginVertical: 10,
  },
  username: {
    color: "white",
    fontSize: 30,
    fontWeight: "700"
  },
  email: {
    color: "white",
  },
  bottomMain: {
    padding: 20,
  },
  settings: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  signout: {
    fontSize: 25,
    marginVertical: 15,
    fontWeight: "bold",
    color: "#fc3f3f",
  },
});
