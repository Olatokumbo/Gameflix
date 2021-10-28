import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Avatar } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { AppContext } from "../../contexts/AppContext";
import styles from "./styles";

export default function Profile() {
  const [_a, setIsLoggedIn, username] = useContext(AppContext);

  const signout = () => {
    SecureStore.deleteItemAsync("token").then(() => {
      setIsLoggedIn(false);
    });
  };
  return (
    <View style={styles.profile}>
      <View style={styles.topMain}>
        {!username ? (
          <Avatar.Icon size={100} icon="account-circle" />
        ) : (
          <Avatar.Image
            size={100}
            source={{
              uri: `https://eu.ui-avatars.com/api/?name=${username}`,
            }}
          />
        )}
        <View style={styles.textMain}>
          <Text style={styles.username}>{username}</Text>
          {/* <Text style={styles.email}>johndoe@gmail.com</Text> */}
        </View>
      </View>
      <View style={styles.bottomMain}>
        {/* <Text style={styles.settings}>Settings</Text> */}
        <TouchableOpacity onPress={signout}>
          <Text style={styles.signout}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
