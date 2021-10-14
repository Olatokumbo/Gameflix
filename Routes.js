import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { AppContext } from "./contexts/AppContext";

const Stack = createNativeStackNavigator();
function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Root"
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
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
