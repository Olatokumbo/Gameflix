import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { PosterCard } from "../components/PosterCard";
import { SearchPosterCard } from "../components/SearchPosterCard";

export default function Search({ navigation }) {
  return (
    <View style={styles.search}>
      <View style={styles.topSection}>
        <Searchbar
          placeholder="Search"
          style={styles.searchBar}
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
        <Text style={styles.searchText}>Video Games</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        renderItem={() => (
          <TouchableOpacity
            style={{ flex: 1, height: "60%" }}
            onPress={() => navigation.navigate("Game Info")}
          >
            <SearchPosterCard />
          </TouchableOpacity>
        )}
        numColumns={3}
        //keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: "13%",
  },
  topSection: {
    paddingBottom: 10,
  },
  searchBar: {
    paddingVertical: 2,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  searchText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
  },
});
