import React from "react";
import Michelle from "../images/michelle.jpg";
import Social from "./Social";
const Text = () => {
  return (
    <div className="text">
      <div className="text-1">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </div>
      <div className="text-2">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </div>
      <div className="text-3">
        <div className="user-image">
          <img src={Michelle} alt="" />
        </div>
        <div className="user-info">
          <p className="name">Michelle Appleton</p>
          <p className="date">28 Jun 2020</p>
        </div>
        <input type="checkbox" name="SHARE" id="SHARE" />
        <label htmlFor="SHARE">
          <div className="share">
            <svg
              className="asd"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="13"
            >
              <path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </label>
        <Social />
      </div>
    </div>
  );
};
export default Text;
