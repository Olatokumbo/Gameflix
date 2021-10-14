import { View, Image, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import mainPoster from "../../assets/mainPoster1.jpg";
import styles from "./styles";
import GameRow from "../../components/GameRow";
import { AppContext } from "../../contexts/AppContext";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home({ navigation, ...rest }) {
  const [isLoggedIn, setIsLoggedIn] = useContext(AppContext);
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
