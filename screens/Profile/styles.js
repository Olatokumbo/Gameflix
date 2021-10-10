import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  