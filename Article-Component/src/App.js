import React from "react";
import "./styles.scss";
import drawer from "./images/drawers.jpg";
import { Text } from "./components/Index";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="main-image">
          <img src={drawer} alt="" />
        </div>
        <Text />
      </div>
    </>
  );
};
export default App;
