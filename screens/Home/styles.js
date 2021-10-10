import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    height: "100%",
  },
  mainPoster: {
    height: 450,
    width: "100%",
  },
  content: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  divider: {
    height: 80,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  gameList: {
    width: "100%",
    // backgroundColor: "yellow",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});
