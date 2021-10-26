import React from "react";
import Navbar from "./Navbar";

import styles from "../styles/Section_1.module.scss";

const Header = () => {
  return (
    <div className={`${styles.section_1} mb-5`}>
      <Navbar />

      <div className={`${styles.container} container text-center text-white`}>
        <h1 className={`${styles.fontSize} ubuntu`}>
          A modern publishing platform
        </h1>
        <p className="fs-5 my-4 ubuntu opacity-75">
          Grow your audience and build your online brand
        </p>
        <div className="d-flex justify-content-center gap-4 ">
          <button className={`${styles.btn_1} btn rounded-pill`}>
            Start for Free
          </button>
          <button className={`${styles.btn_2} btn rounded-pill  fw-bold`}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
