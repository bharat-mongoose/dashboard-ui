import React from "react";
import {
  MdNotificationAdd,
  MdOutlineEmail,
  MdOutlineSettings,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import image from "../../assets/images/image3.webp";
import styles from "./Layout.module.css";

const Navbar = () => {
  return (
    <div className="container-fluid px-2">
      <nav
        className={`${styles["nav-background"]} navbar navbar-expand-lg  py-2`}
      >
        <div className={styles["search-container"]}>
          <CiSearch fill="#fff" className={styles["search-icon"]} />
          <input
            type="text"
            className={`${styles["search-box"]} me-2 ml-2`}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mt-1 mb-lg-0">
            <li className="nav-item text-center ">
              <div className="nav-link">
                <MdOutlineEmail fill="#fff" className={styles["icon-circle"]} />
              </div>
            </li>
            <li className="nav-item text-center">
              <div className="nav-link">
                <MdOutlineSettings
                  fill="#fff"
                  className={styles["icon-circle"]}
                />
              </div>
            </li>
            <li className="nav-item text-center">
              <div className="nav-link ">
                <MdNotificationAdd
                  fill="#fff"
                  className={styles["icon-circle"]}
                />
              </div>
            </li>
            <li className="nav-item text-center">
              <div className="nav-link">
                <img
                  src={image}
                  className={styles["profile_image"]}
                  alt="profile"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
