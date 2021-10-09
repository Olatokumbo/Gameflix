import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, GameDetails } from "../screens";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={Home}
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
        name="Game Info"
        component={GameDetails}
        options={{
          //   header: () => null,
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
  );
}
