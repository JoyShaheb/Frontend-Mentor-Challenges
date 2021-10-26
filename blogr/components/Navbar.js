import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-3">
      <styles jsx></styles>

      <div className="container ">
        <a className="navbar-brand fs-1 fw-bold me-5" href="#">
          Blogr
        </a>
        <button
          className="navbar-toggler border-0 fs-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={`fas fa-bars open text-white`}></i>
          <i className="fas fa-times close text-white"></i>
        </button>
        <div
          className={`${styles.window} collapse navbar-collapse text-center`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item dropdown">
              <a
                className={`${styles.navLinks} nav-link dropdown-toggle fw-bold`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul
                className={`${styles.dropdown} dropdown-menu text-center`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marketplace
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Features
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`${styles.navLinks} nav-link dropdown-toggle fw-bold`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                className={`${styles.dropdown} dropdown-menu text-center`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`${styles.navLinks} nav-link dropdown-toggle fw-bold`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Connect
              </a>
              <ul
                className={`${styles.dropdown} dropdown-menu text-center`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
            <hr />
            <div className="d-lg-none d-flex flex-column align-items-center gap-3">
              <button className="btn  text-dark fs-5 logIn">Log In</button>
              <button className={`btn px-3 rounded-pill ${styles.signUp}`}>
                Sign up
              </button>
            </div>
          </ul>
        </div>
        <div className="d-lg-flex d-none gap-3">
          <button className="btn  text-white fs-5 logIn">Log In</button>
          <button className={`btn px-3 rounded-pill ${styles.signUp}`}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
