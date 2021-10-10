import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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

export default function Signin({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
                <Button
                  title="Sign in"
                  color="#F12424"
                  onPress={() => navigation.push("Root")}
                />
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
