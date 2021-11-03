import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Comment from "../../components/Comment";
import mainPoster from "../../assets/defaultcover.png";
import { Provider } from "react-native-paper";
import axios from "axios";
import styles from "./styles";

import logo from "../../assets/glogo.png";
import getRatings from "../../utils/getRatings";
import ReviewPortal from "../../components/ReviewPortal";
export default function GameDetails({ route, navigation }) {
  const id = route.params.id;
  const token = route.params.token;
  const [gameDetails, setGameDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://192.168.137.1:8000/game/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGameDetails(response.data);
        setReviews(response.data.reviews);
        setLoading(false);
      })
      .catch((err) => {
        navigation.goBack();
      });
  }, [id]);
  return (
    <Provider>
      <View style={styles.gameDetails}>
        {loading ? (
          <Image
            source={mainPoster}
            style={styles.mainPoster}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={{
              uri: `http://192.168.137.1:8000/game/image/${gameDetails.coverURL}`,
            }}
            style={styles.mainPoster}
            resizeMode="cover"
          />
        )}
        <View style={styles.main}>
          <View style={styles.genreMain}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.genreText}>{gameDetails.genre}</Text>
          </View>
          <Text style={styles.title}>{gameDetails.title}</Text>
          <View style={styles.ratingsContainer}>
            <FontAwesome name="star" color="#FBC53A" size={20} />
            <Text style={styles.ratings}>
              {gameDetails.reviews && getRatings(gameDetails.reviews)}
            </Text>
          </View>
          <TouchableOpacity onPress={showDialog} style={styles.addReview}>
            <FontAwesome name="plus" color="black" size={20} />
            <Text style={styles.addReviewText}>Add Review</Text>
          </TouchableOpacity>
          <Text style={styles.reviewHeader}>
            {reviews && (reviews.length > 0 ? reviews.length : "No")} Review(s)
          </Text>
        </View>
        <FlatList
          // style={styles.flatList}
          data={reviews}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Comment data={item} navigation={navigation} />
          )}
          refreshing={false}
          // refreshControl={()=>console.log("REFRESHING")}
        />
        <ReviewPortal
          visible={visible}
          hideDialog={hideDialog}
          id={id}
          token={token}
          setReviews={setReviews}
        />
      </View>
    </Provider>
  );
}
