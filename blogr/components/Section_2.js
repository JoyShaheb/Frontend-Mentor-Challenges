/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Section_2.module.scss";

const Section_2 = () => {
  return (
    <div className={`${styles.section_2} my-5 py-5`}>
      <div className={`container text-lg-start text-center`}>
        <h2 className={`${styles.text} text-center fw-bold mb-5`}>
          Designed for the future
        </h2>
        <div className="row align-items-center gap-5">
          <div className="col-lg-6 col-12 order-lg-0 order-1">
            <div className="mb-5">
              <h4 className={`${styles.text} fw-bold mb-4`}>
                Introducing an extensible editor
              </h4>
              <p className="">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>

            <div className="">
              <h4 className={`${styles.text} fw-bold mb-4`}>
                {" "}
                Robust content management
              </h4>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
          <div style={{ transform: "" }} className="col">
            <img
              style={{}}
              className="img-fluid"
              src="images/illustration-editor-desktop.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
