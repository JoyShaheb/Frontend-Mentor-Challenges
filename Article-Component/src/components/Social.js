import React from "react";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import "../styles.scss";

const Social = () => {
  return (
    <div class="social">
      <div class="top">
        <div class="text">SHARE</div>
        <div class="icon-1">
          <img src={facebook} alt="" />
        </div>
        <div class="icon-2">
          <img src={pinterest} alt="" />
        </div>
        <div class="icon-3">
          <img src={twitter} alt="" />
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  );
};
export default Social;
