import React from "react";
import "./styles.scss";
import Left from "./components/Left";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Left />
        <FAQ />
      </div>
    </div>
  );
};
export default App;
