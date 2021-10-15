import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [token, setToken] = useState(null);
  useEffect(() => {
    const getValueFor = async (key) => {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        setIsLoggedIn(true);
      }
    };
    getValueFor("token");
  }, []);

  return (
    <AppContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </AppContext.Provider>
  );
};
