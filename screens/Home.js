import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import mainPoster from "../assets/mainPoster1.jpg";
import gamePoster from "../assets/gamePoster.jpg";
import { PosterCard } from "../components/PosterCard";
export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={{ position: "relative" }}>
          <Image
            source={mainPoster}
            style={styles.mainPoster}
            resizeMode="cover"
          />
          <LinearGradient
            // Button Linear Gradient
            colors={["transparent", "#000000"]}
            style={styles.divider}
          ></LinearGradient>
        </View>

        <View style={styles.content}>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.headerText}>Latest Games</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={() => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Game Info", { message: "Hello World" })
                  }
                >
                  <PosterCard />
                </TouchableOpacity>
              )}
              horizontal
            />
            <Text style={styles.headerText}>Latest Games</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={() => <PosterCard />}
              horizontal
            />
            <Text style={styles.headerText}>Latest Games</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={() => <PosterCard />}
              horizontal
            />
            <Text style={styles.headerText}>Latest Games</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={() => <PosterCard />}
              horizontal
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
