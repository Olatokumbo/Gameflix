import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import React from "react";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Button,
  Alert,
} from "react-native";

import bgImage from "../../assets/bg.jpg";
import logo from "../../assets/logo_small.png";
import styles from "./styles";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function Signin({ navigation }) {
  const [_isLoggedIn, setIsLoggedIn] = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    axios
      .post(
        "http://192.168.137.1:8000/auth/signin",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        //setToken(response.data.token);
        save("token", response.data.token);
        setIsLoggedIn(true);
        navigation.push("Root");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(err.response.data.message);
      });
  };

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode={"cover"}
          style={styles.image}
        >
          <View style={styles.overlay}>
            <View style={styles.main}>
              <Image source={logo} style={styles.logo} />
              <View style={styles.inputContainer}>
                <Text style={styles.text}>Sign in</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="white"
                  keyboardType={"email-address"}
                  onChangeText={setUsername}
                  value={username}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="white"
                  keyboardType="default"
                  onChangeText={setPassword}
                  value={password}
                />
                <Button title="Sign in" color="#F12424" onPress={submit} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={styles.smallText1}>Don't have an account?</Text>
                  <Text
                    style={styles.smallText2}
                    onPress={() => navigation.push("Sign up")}
                  >
                    Register NOW
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <StatusBar
            translucent
            backgroundColor="black"
            style="light"
            barStyle="light-content"
          />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
