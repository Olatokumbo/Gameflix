import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Comment from "../components/Comment";
import mainPoster from "../assets/mainPoster1.jpg";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import { Rating } from "react-native-elements";

import logo from "../assets/glogo.png";
export default function GameDetails({ route: { params } }) {
  // console.log(params.message);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <View style={styles.gameDetails}>
        <Image
          source={mainPoster}
          style={styles.mainPoster}
          resizeMode="cover"
        />
        <View style={styles.main}>
          <View style={styles.genreMain}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.genreText}>Shooter</Text>
          </View>
          <Text style={styles.title}>Call of Duty Black Ops</Text>
          <View style={styles.ratingsContainer}>
            <FontAwesome name="star" color="#FBC53A" size={20} />
            <Text style={styles.ratings}>8.5</Text>
          </View>
          <TouchableOpacity onPress={showDialog} style={styles.addReview}>
            <FontAwesome name="plus" color="black" size={20} />
            <Text style={styles.addReviewText}>Add Review</Text>
          </TouchableOpacity>
          <Text style={styles.reviewHeader}>Reviews</Text>
        </View>
        <ScrollView>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
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

const styles = StyleSheet.create({
  gameDetails: {
    backgroundColor: "black",
    flex: 1,
  },
  logo: {
    width: 29,
    height: 33,
  },
  genreMain: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  genreText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    marginHorizontal: 5,
  },
  mainPoster: {
    height: "35%",
    width: "100%",
  },
  main: {
    padding: 10,
  },
  title: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratings: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#FBC53A",
  },
  addReview: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  addReviewText: {
    marginHorizontal: 10,
  },
  reviewHeader: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
});
