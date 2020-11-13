import React from "react";
import "./styles.scss";
import pattern_bg from "./images/pattern-bg.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <img src={pattern_bg} alt="" /> */}
        <div className="left">
          <p>
            “ If you want to lay the best foundation possible I’d recommend
            taking this course. The depth the instructors go into is incredible.
            I now feel so confident about starting up as a professional
            developer. ”
          </p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
