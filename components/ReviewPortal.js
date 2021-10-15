import React, { useEffect, useState, useContext } from "react";
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
import { AppContext } from "../contexts/AppContext";

export default function ReviewPortal({
  visible,
  hideDialog,
  id,
  setReviews,
  token,
}) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [_a, _b, userId] = useContext(AppContext);
  const postComment = () => {
    axios
      .post(
        `http://192.168.137.1:8000/review/${id}/add`,
        {
          userId,
          rating,
          comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
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
            minValue={1}
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
