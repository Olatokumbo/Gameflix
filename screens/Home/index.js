import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

import mainPoster from "../../assets/mainPoster1.jpg";
import gamePoster from "../../assets/gamePoster.jpg";
import { PosterCard } from "../../components/PosterCard";

import styles from "./styles";
import GameRow from "../../components/GameRow";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      refreshControl={
        <RefreshControl
          progressViewOffset={60}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
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
            <GameRow
              navigation={navigation}
              genre="Shooter"
              refreshing={refreshing}
            />
            <GameRow
              navigation={navigation}
              genre="Adventure"
              refreshing={refreshing}
            />
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
