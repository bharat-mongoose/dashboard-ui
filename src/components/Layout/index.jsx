import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={styles["page-wrapper"]}>
      <Sidebar />
      <div className={styles["content-wrapper"]}>
        <Navbar />
        <div style={{ overflowY: "auto", height: "calc(100vh - 60px)" }}>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
