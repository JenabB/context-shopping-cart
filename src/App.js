import React from "react";
import { GlobalProvider } from "./contexts/GlobalState";
import Navigation from "./Navigation";

const App = () => {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
};

export default App;
