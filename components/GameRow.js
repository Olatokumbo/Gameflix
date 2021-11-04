import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { PosterCard } from "./PosterCard";

export default function GameRow({ navigation, genre, refreshing, token }) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        `https://gameflix1.herokuapp.com/game/list/${genre.toLowerCase()}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      data = await data.json();
      setGames(data);
    };
    fetchData();
    return () => {
      setGames([]);
    };
  }, [refreshing]);
  return (
    <View style={styles.gameRow}>
      <Text style={styles.headerText}>{genre} Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Game Info", { id: item._id, token })}
          >
            <PosterCard data={item} />
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gameRow: {
    marginVertical: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
