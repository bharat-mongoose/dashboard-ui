import React, { Fragment, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { menus } from "../../utils/constant";
import styles from "./Layout.module.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColor = "#6a98fe";
  const inactiveColor = "#ffffff";
  return (
    <Fragment>
      <div
        className={`${styles.sidebar} d-flex flex-column justify-content-between`}>
        <div>
          <div className=" mx-3 my-2">
            <TbLayoutDashboardFilled
              size={35}
              fill="#6a98fe"
              className="mt-1"
            />
          </div>
          <ul className="nav nav-pills flex-column">
            {menus?.length &&
              menus.map((item, i) => {
                return (
                  <li
                    className={`nav-item text-white my-1  ${
                      activeIndex === i ? styles.vertical_row : ""
                    }`}
                    key={item.id}
                    onClick={() => {
                      setActiveIndex(i);
                      navigate(item.url);
                    }}>
                    <div
                      className={`nav-link text-white fs-5 ${styles["cursor-pointer"]}`}>
                      {React.cloneElement(item.label, {
                        fill: activeIndex === i ? activeColor : inactiveColor,
                      })}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <div
            className={`d-flex justify-content-center text-white my-1 fs-5 ${styles["cursor-pointer"]}`}>
            <IoMdLogOut size={30} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
