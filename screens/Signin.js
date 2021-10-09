import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
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

import bgImage from "../assets/bg.jpg";
import logo from "../assets/logo_small.png";

export default function Signin({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(async () => {
  //   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   data = await data.json();
  //   console.log(data);
  // }, []);
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
                  onPress={() =>
                    navigation.push("Home")
                  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 40,
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202020db",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#181818b0",
    width: "100%",
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 0,
    padding: 10,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  smallText1: {
    color: "white",
    fontSize: 13,
    marginTop: 15,
    marginRight: 5,
  },
  smallText2: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 5,
  },
});
