import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { PosterCard } from "./PosterCard";

export default function GameRow({ navigation, genre }) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        `http://192.168.137.1:8000/game/list/${genre.toLowerCase()}`
      );
      data = await data.json();
      setGames(data);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.gameRow}>
      <Text style={styles.headerText}>{genre} Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Game Info", { id: item._id })}
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
