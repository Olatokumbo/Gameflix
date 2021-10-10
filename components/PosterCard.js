import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import gamePoster from "../assets/gamePoster.jpg";

export function PosterCard({ data }) {
  return (
    <View style={styles.posterCard}>
      <Image
        key={new Date()}
        source={{ uri: data.posterURL }}
        style={styles.poster}
      />
      <View style={styles.bottomCard}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.ratingsContainer}>
          <FontAwesome name="star" color="#FBC53A" size={15} />
          <Text style={styles.ratings}>{data.ratings}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  posterCard: {
    margin: 6,
  },
  bottomCard: {
    backgroundColor: "#2d2d2d",
    borderBottomRightRadius: 5,
    padding: 5,
    borderBottomLeftRadius: 5,
  },
  ratingsContainer: {
    // paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratings: {
    fontSize: 13,
    color: "white",
    marginHorizontal: 5,
  },
  poster: {
    width: 150,
    height: undefined,
    aspectRatio: 2 / 3,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
