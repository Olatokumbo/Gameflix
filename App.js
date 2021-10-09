import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import GameDetails from "./screens/GameDetails";
import Profile from "./screens/Profile";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign in"
          component={Signin}
          options={{
            header: () => null,
            navigationOptions: {
              headerShown: false,
            },
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Sign up"
          component={Signup}
          options={{
            header: () => null,
            navigationOptions: {
              headerShown: false,
            },
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{
            header: () => null,
            navigationOptions: {
              headerShown: false,
            },
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
