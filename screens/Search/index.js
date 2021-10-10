import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { SearchPosterCard } from "../../components/SearchPosterCard";
import styles from "./styles";
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
