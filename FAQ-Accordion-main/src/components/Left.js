import React from "react";
import box from "../images/illustration-box-desktop.svg";
import board from "../images/illustration-woman-online-desktop.svg";
import board_mobile from "../images/bg-pattern-desktop.svg";
import pattern from "../images/bg-pattern-desktop.svg";

const Left = () => {
  return (
    <div className="image">
      <img src={box} className="box" alt="box" />
      <img src={board} className="board" alt="" />
      {/* <img src={board_mobile} className="board-mobile" alt=""/> */}
      <img src={pattern} className="pattern" alt="" />
    </div>
  );
};
export default Left;
