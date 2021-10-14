import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Rating } from "react-native-elements";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  TextInput,
} from "react-native-paper";
import axios from "axios";

export default function ReviewPortal({ visible, hideDialog, id, setReviews }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const userId = "6161cd0041ff536cf19ad1e3";

  const postComment = () => {
    axios
      .post(`http://192.168.137.1:8000/review/${id}/add`, {
        userId,
        rating,
        comment,
      })
      .then((data) => {
        console.log(data);
        setRating(0);
        setComment("");
        setReviews((prevReviews) => [
          ...prevReviews,
          {
            _id: new Date().getMilliseconds().toString(),
            userId,
            rating,
            comment,
          },
        ]);
        hideDialog();
        Alert.alert("Review Sent!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add Review</Dialog.Title>
        <Dialog.Content>
          {/* <Paragraph>Please enter your ratings </Paragraph> */}
          <Rating
            showRating
            imageSize={20}
            onFinishRating={(e) => setRating(e)}
            style={{ paddingVertical: 10 }}
          />
          <TextInput
            label="Comment"
            multiline
            numberOfLines={7}
            value={comment}
            onChangeText={(text) => setComment(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={postComment}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
