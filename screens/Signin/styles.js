import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 40,
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202020db",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#181818b0",
    width: "100%",
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 0,
    padding: 10,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  smallText1: {
    color: "white",
    fontSize: 13,
    marginTop: 15,
    marginRight: 5,
  },
  smallText2: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 5,
  },
});
