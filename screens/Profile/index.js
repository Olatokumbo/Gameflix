import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Avatar } from "react-native-paper";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { AppContext } from "../../contexts/AppContext";
import styles from "./styles";

export default function Profile() {
  const [_a, setIsLoggedIn, _c] = useContext(AppContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getValueFor = async (key) => {
      try {
        let token = await SecureStore.getItemAsync(key);
        const response = await axios.get("http://192.168.137.1:8000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getValueFor("token");
  }, []);

  const signout = () => {
    SecureStore.deleteItemAsync("token").then(() => {
      setIsLoggedIn(false);
    });
  };
  return (
    <View style={styles.profile}>
      <View style={styles.topMain}>
        {!user ? (
          <Avatar.Icon size={100} icon="account-circle" />
        ) : (
          <Avatar.Image
            size={100}
            source={{
              uri: `https://eu.ui-avatars.com/api/?name=${user.username}`,
            }}
          />
        )}
        <View style={styles.textMain}>
          <Text style={styles.username}>{user && user.username}</Text>
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
