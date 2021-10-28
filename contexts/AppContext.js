import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const getValueFor = async (key) => {
      try {
        let token = await SecureStore.getItemAsync(key);
        if (token) {
          const response = await axios.get("http://192.168.137.1:8000/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data) {
            setUsername(response.data.username);
            setIsLoggedIn(true);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getValueFor("token");
  }, []);

  return (
    <AppContext.Provider
      value={[isLoggedIn, setIsLoggedIn, username, setUsername]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
