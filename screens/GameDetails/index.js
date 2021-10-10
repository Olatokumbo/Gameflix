import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Comment from "../../components/Comment";
import mainPoster from "../../assets/mainPoster1.jpg";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import { Rating } from "react-native-elements";
import styles from "./styles";

import logo from "../../assets/glogo.png";
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
