import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.profile}>
      <View style={styles.topMain}>
        <Avatar.Icon size={100} icon="account-circle" />
        <View style={styles.textMain}>
          <Text style={styles.username}>JohnDoe</Text>
          <Text style={styles.email}>johndoe@gmail.com</Text>
        </View>
      </View>
      <View style={styles.bottomMain}>
        <Text style={styles.settings}>Settings</Text>
        <Text style={styles.signout}>Sign Out</Text>
      </View>
    </View>
  );
}
