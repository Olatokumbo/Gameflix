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

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
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
                <Text style={styles.text}>Sign up</Text>
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
                  placeholder="Email"
                  placeholderTextColor="white"
                  keyboardType={"email-address"}
                  onChangeText={setEmail}
                  value={email}
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
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="white"
                  keyboardType="default"
                  onChangeText={setCPassword}
                  value={cPassword}
                />
                <Button
                  title="Sign up"
                  color="#F12424"
                  onPress={() =>
                    Alert.alert("Button with adjusted color pressed")
                  }
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={styles.smallText1}>
                    Already have an account?
                  </Text>
                  <Text
                    style={styles.smallText2}
                    onPress={() => navigation.goBack()}
                  >
                    Sign in
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
