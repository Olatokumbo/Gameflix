import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, Profile, Search } from "../screens";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeNavigation from "./HomeNavigation";
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    //<NavigationContainer>
    <Tab.Navigator barStyle={{ backgroundColor: "#000000" }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
    //</NavigationContainer>
  );
}
