import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AppContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </AppContext.Provider>
  );
};
