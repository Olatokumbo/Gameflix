import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Comment from "../../components/Comment";
import mainPoster from "../../assets/defaultcover.png";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import { Rating } from "react-native-elements";
import axios from "axios";
import styles from "./styles";

import logo from "../../assets/glogo.png";
export default function GameDetails({ route, navigation }) {
  const id = route.params.id;
  const [gameDetails, setGameDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://192.168.137.1:8000/game/${id}`)
      .then((response) => {
        setGameDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        navigation.goBack();
      });
    // const fetchData = async () => {
    //   try {
    //     let data = await fetch(`http://192.168.137.1:8000/game/${id}`);
    //     data = await data.json();
    //     setGameDetails(data);
    //     setLoading(false);
    //   } catch (error) {
    //     navigation.goBack();
    //   }
    // };
    // fetchData();
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
            source={{ uri: gameDetails.coverURL }}
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
            <Text style={styles.ratings}>{gameDetails.ratings}</Text>
          </View>
          <TouchableOpacity onPress={showDialog} style={styles.addReview}>
            <FontAwesome name="plus" color="black" size={20} />
            <Text style={styles.addReviewText}>Add Review</Text>
          </TouchableOpacity>
          <Text style={styles.reviewHeader}>Reviews</Text>
        </View>
        <FlatList
          // style={styles.flatList}
          data={gameDetails.reviews}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Comment data={item} />}
        />
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Add Review</Dialog.Title>
            <Dialog.Content>
              {/* <Paragraph>Please enter your ratings </Paragraph> */}
              <Rating
                showRating
                imageSize={20}
                // onFinishRating={(e)=>console.log(e)}
                style={{ paddingVertical: 10 }}
              />
              <TextInput
                label="Comment"
                multiline
                numberOfLines={7}
                // value={text}
                // onChangeText={(text) => setText(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}
