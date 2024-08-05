import { AgCharts } from "ag-charts-react";
import React from "react";

const Chart = ({ chartOptions }) => {
  return (
    <>
      <AgCharts options={chartOptions} style={{ flex: "1", height: "200px" }} />
    </>
  );
};

export default Chart;
