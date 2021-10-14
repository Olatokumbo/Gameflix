import * as React from "react";
import { AppProvider } from "./contexts/AppContext";
import Routes from "./Routes";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
