/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "../styles/Section_3.module.scss";

const Section_3 = () => {
  return (
    <div style={{ marginBottom: "150px" }} className={`${styles.section_3}  `}>
      <div style={{ transform: " translateY(-70px)" }} className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <img
              className="img-fluid"
              src="images/illustration-phones.svg"
              alt=""
            />
          </div>
          <div className="col text-white text-lg-start text-center">
            <h2 className="mb-4 fw-bold">State of the Art Infrastructure</h2>
            <p className="opacity-75">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Section_3;
