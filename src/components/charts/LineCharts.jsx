import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import styles from "../css/lineChart.module.css";
import { configLine } from "../../config/chart";

Chartjs.register(CategoryScale, LineElement, LinearScale, PointElement, Legend);

function LineCharts() {
  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        label: "item",
        data: [55, 23, 96, 60, 30, 35, 45, 65, 75, 77, 60, 65, 55, 87, 89],
        borderColor: "#4FD1C5",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <div className="chart-container w-full m-auto p-6 md:p-4">
        <Line data={data} options={configLine} className={styles.lineCanvas} />
      </div>
    </>
  );
}

export default LineCharts;
