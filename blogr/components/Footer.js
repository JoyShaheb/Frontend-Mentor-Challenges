/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className="container text-white">
        <div className="row py-5 ">
          <div className="col-md-3 col-12 d-md-block d-flex justify-content-center mb-md-0 mb-5">
            <img src="images/logo.svg" alt="" className="img-fluid" />
          </div>
          <div className={`${styles.links} col-md-3 col-12 mb-md-0 mb-5`}>
            <div>
              <p className="fs-5 fw-bold mb-4 ">Product</p>
              <div className="opacity-75">
                <a>Overview</a>
                <a>Pricing</a>
                <a>Marketplace</a>
                <a>Features</a>
                <a>Integrations</a>
              </div>
            </div>
          </div>
          <div className={`${styles.links} col-md-3 col-12 mb-md-0 mb-5`}>
            <div>
              <p className="fs-5 fw-bold mb-4">Company</p>
              <div className="opacity-75">
                <a>About</a>
                <a>Team</a>
                <a>Blog</a>
                <a>Careers</a>
              </div>
            </div>
          </div>
          <div className={`${styles.links} col-md-3 col-12 mb-md-0 mb-5`}>
            <div>
              <p className="fs-5 fw-bold mb-4">Connect</p>
              <div className="opacity-75">
                <a>Contact</a>
                <a>Newsletter</a>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
