import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  gameDetails: {
    backgroundColor: "black",
    flex: 1,
  },
  logo: {
    width: 29,
    height: 33,
  },
  genreMain: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  genreText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    marginHorizontal: 5,
  },
  mainPoster: {
    height: "35%",
    width: "100%",
  },
  main: {
    padding: 10,
  },
  title: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratings: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#FBC53A",
  },
  addReview: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  addReviewText: {
    marginHorizontal: 10,
  },
  reviewHeader: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
  flatList: {
    transform: [{ scaleY: -1 }],
  },
});
