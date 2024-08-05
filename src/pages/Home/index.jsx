import React, { Fragment, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { LiaHamburgerSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { boxData, feedbackData, tableData } from "../../utils/constant";
import ProgressBar from "../../components/ProgressBar";
import Chart from "../../components/Chart";
import SelectBox from "../../components/SelectBox";
import styles from "./Home.module.css";
import { IoMdArrowDropup } from "react-icons/io";

const options = [
  { value: "weekly", label: "weekly" },
  { value: "monthly", label: "monthly" },
  { value: "yearly", label: "yearly" },
];

const Home = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
      { month: "5", iceCreamSales: 15000 },
      { month: "9", iceCreamSales: 2000 },
      { month: "11", iceCreamSales: 8000 },
      { month: "13", iceCreamSales: 14000 },
      { month: "15", iceCreamSales: 9000 },
      { month: "17", iceCreamSales: 10000 },
      { month: "19", iceCreamSales: 8000 },
      { month: "21", iceCreamSales: 7000 },
      { month: "23", iceCreamSales: 6000 },
      { month: "25", iceCreamSales: 2000 },
      { month: "27", iceCreamSales: 4000 },
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        cornerRadius: 10,
        autoSize: true,
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          color: "#ffffff",
        },
      },
      {
        type: "number",
        position: "left",
        label: {
          color: "#ffffff",
        },
      },
    ],
    background: {
      fill: "#525353",
    },
  });
  return (
    <div className="container-fluid bg-dark  ">
      <h3 className="text-white px-md-3 py-3">Dashboard</h3>
      <div className="row px-md-3 px-sm-1">
        <div className="col-md-8 col-sm-12  text-white">
          <div className={styles["box-container"]}>
            {boxData?.length &&
              boxData?.map((item, i) => {
                return (
                  <div className={styles["box-item"]} key={i}>
                    <div className="mt-1">
                      <div
                        className={`${
                          i == 0
                            ? styles["icon-box"]
                            : i == 1
                            ? styles["icon-box1"]
                            : i == 2
                            ? styles["icon-box2"]
                            : styles["icon-box3"]
                        }`}>
                        {item.icon}
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h4>{item.value}</h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <p
                          className={`${
                            i == 0 || i == 2
                              ? styles["active"]
                              : styles["de-active"]
                          }`}>
                          {item.percentIcon}
                        </p>
                        <p
                          className={`${
                            i == 0 || i == 2
                              ? styles["active"]
                              : styles["de-active"]
                          }`}>
                          {item.percent}%
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-white mt-2 mt-md-0">
          <div className={styles["profit-box"]}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Net Profit</h5>
                <h4>$6759.25</h4>
                <div className={`${styles["active"]} mt-3`}>
                  <IoMdArrowDropup />
                  3%
                </div>
              </div>
              <div>
                <ProgressBar value={"70"} color={"#000"} text={"70%"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-md-3 px-sm-1 mt-4 ">
        <div className="col-md-8 col-sm-12 text-white">
          <div className={styles["activity-container"]}>
            <div className="d-flex justify-content-between">
              <h5>Activity</h5>
              <div>
                <SelectBox options={options} name="search" />
              </div>
            </div>
            <div className="">
              <Chart chartOptions={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-white mt-2 mt-md-0">
          <div className={`${styles["profit-box"]} py-4 `}>
            <div className="d-flex justify-content-between  mt-2">
              <div className="d-flex gap-3 align-items-center">
                <TbCurrentLocation className={styles["location-icon"]} />
                <div>Goals</div>
              </div>
              <div className="d-flex align-items-center">
                <MdOutlineChevronRight className={styles["arrow-icon"]} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex gap-3 align-items-center">
                <LiaHamburgerSolid className={styles["dish-icon"]} />
                <div>Popular Dishes</div>
              </div>
              <div className="d-flex align-items-center">
                <MdOutlineChevronRight className={styles["arrow-icon"]} />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex gap-3 align-items-center">
                <BiDish className={styles["menu-icon"]} />

                <div>Menus</div>
              </div>
              <div className="d-flex align-items-center">
                <MdOutlineChevronRight className={styles["arrow-icon"]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row px-md-3 px-sm-1 mt-4 ">
        <div className="col-md-8 col-sm-12 text-white">
          <div className={styles["activity-container"]}>
            <div className="d-flex justify-content-between">
              <h5>Recent Orders</h5>
            </div>
            <div className={styles["table-responsive"]}>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Order No.</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="d-flex gap-2">
                          <img
                            src={item.profile}
                            alt="profile"
                            className={styles.profile}
                          />
                          {item.name}
                        </td>
                        <td>{item.orderNo}</td>
                        <td>{item.amount}</td>
                        <td>
                          {item.status == 1 ? (
                            <span class="badge bg-success">Delivered</span>
                          ) : item.status == 0 ? (
                            <span class="badge bg-danger">Cancelled</span>
                          ) : (
                            <span class="badge bg-danger">Pending</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-white mt-2 mt-md-0">
          <div className={styles["profit-box"]}>
            <h5>Customer's Feedback</h5>
            <div className={`${styles["feedback-container"]} mt-2 `}>
              {feedbackData?.map((val, index) => {
                return (
                  <Fragment key={index}>
                    <div className="d-flex gap-2 ">
                      <img src={val?.image} className={styles.profile} />
                      <p>{val?.name}</p>
                    </div>
                    {[1, 2, 3, 4, 5].fill(val?.rating).map((rat, i) => {
                      if (i < val.rating) {
                        return <FaStar fill="yellow" key={i} />;
                      }
                      return <FaStar />;
                    })}
                    <p>{val?.description}</p>
                    <hr />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
