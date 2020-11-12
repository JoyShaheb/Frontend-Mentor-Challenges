import React from "react";

import arrow from "../images/icon-arrow-down.svg";

let acc = document.getElementsByClassName("accordion");

// console.log(acc[0].nextElementSibling);

const click = (x) => {
  let panel = acc[x].nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    acc[x].classList.remove("open");
    acc[x].getElementsByClassName("icon")[0].style.transform = "rotate(0deg)";
  } else {
    for (let r = 0; r < acc.length; r++) {
      acc[r].nextElementSibling.style.maxHeight = null;
      acc[r].classList.remove("open");
      acc[r].getElementsByClassName("icon")[0].style.transform = "rotate(0deg)";
    }
    panel.style.maxHeight = panel.scrollHeight + "px";
    acc[x].classList.toggle("open");
    acc[x].getElementsByClassName("icon")[0].style.transform =
      "rotate(-180deg)";
  }
};

const FAQ = () => {
  return (
    <div className="wrapper">
      <div className="container-accordion">
        <h1>FAQ</h1>
        <div className="item-1">
          <div className="accordion" onClick={() => click(0)}>
            <div className="title">How many team members can I invite?</div>
            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="panel">
            <p>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>
        </div>

        <div className="item-2">
          <div className="accordion" onClick={() => click(1)}>
            <div className="title">What is the maximum file upload size?</div>
            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="panel">
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        </div>

        <div className="item-3">
          <div className="accordion" onClick={() => click(2)}>
            <div className="title">How do I reset my password?</div>
            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="panel">
            <p>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </div>
        </div>

        <div className="item-4">
          <div className="accordion" onClick={() => click(3)}>
            <div className="title">Can I cancel my subscription?</div>
            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="panel">
            <p>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </div>
        </div>

        <div className="item-5">
          <div className="accordion" onClick={() => click(4)}>
            <div className="title">Do you provide additional support?</div>
            <div className="icon">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="panel">
            <p>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
