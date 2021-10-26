/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Section_4.module.scss";

const Section_4 = () => {
  return (
    <div style={{ margin: "100px 0" }} className={`${styles.section_4}`}>
      <div className="container text-lg-start text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <img
              src="images/illustration-laptop-desktop.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col">
            <div className="mb-5">
              <h4 className={`${styles.text} fw-bold mb-4`}>
                Free, open, simple
              </h4>
              <p className="">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>
            <div className="mb-5">
              <h4 className={`${styles.text} fw-bold mb-4`}>
                Powerful tooling
              </h4>
              <p className="">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
