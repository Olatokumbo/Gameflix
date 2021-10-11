import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

import mainPoster from "../../assets/mainPoster1.jpg";
import gamePoster from "../../assets/gamePoster.jpg";
import { PosterCard } from "../../components/PosterCard";

import styles from "./styles";
import GameRow from "../../components/GameRow";
export default function Home({ navigation }) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let data = await fetch("http://192.168.137.1:8000/game/list/shooter");
  //     data = await data.json();
  //     console.log(data[0].title);
  //   };
  //   fetchData();
  // }, [navigation]);
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
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
            <GameRow navigation={navigation} genre="Shooter" />
            <GameRow navigation={navigation} genre="Adventure" />
            {/* <Text style={styles.headerText}>Latest Games</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={() => <PosterCard />}
              horizontal
            /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
