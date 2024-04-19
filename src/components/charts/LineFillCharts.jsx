import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale, //x-axis
  LineElement,
  LinearScale, //y-axis
  PointElement,
  Legend, // for label
  Tooltip,
  Filler,
} from "chart.js";
import styles from "../css/lineFill.module.css";
import RangeSwitch from "../../utils/RangeSwitch";
import { Range } from "../navigation/Navigation";
import getGradient from "../constants/getGradient";
import { hoverLine } from "../../config/chart";
import { config } from "../../config/chart";

Chartjs.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

function LineFillCharts() {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedID, setSelectedID] = useState(5);

  const data = {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
    ],
    datasets: [
      {
        label: "filled graph",
        data: [
          0.009, 0.018, 0.027, 0.036, 0.019, 0.018, 0.027, 0.036, 0.014, 0.021,
        ],
        borderColor: "#236de7",
        pointBorderWidth: 4,
        pointBorderColor: "white",
        pointBackgroundColor: "blue",
        borderWidth: 1,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return getGradient(ctx, chartArea);
        },
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const handleIndex = (id) => {
    if (id < 5) {
      setSelectedId(id);
    } else {
      setSelectedID(id);
    }
  };

  return (
    <>
      <div className="chart-container w-full mt-8 md:mt-14">
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-2 md:justify-between lg:pl-14 lg:pr-6 mb-1">
          <div className="w-full md:w-[25%] lg:w-[20%] xl:w-[18%] lg:justify-between flex justify-items-start gap-3 md:gap-2">
            {Range &&
              Range?.slice(0, 5)?.map((el, i) => (
                <div key={i} className="text-center">
                  <RangeSwitch
                    el={el}
                    i={i}
                    handleIndex={handleIndex}
                    isSelected={selectedId === el.id && selectedId < 5}
                    selectedID={selectedID > 5}
                  />
                </div>
              ))}
          </div>
          <div className="w-full md:w-[35%] lg:w-[28%] xl:w-[22%] 2xl:w-[18%] lg:justify-between flex justify-items-start gap-4 md:gap-2 lg:gap-1">
            {Range &&
              Range?.slice(5)?.map((el, i) => (
                <div key={i} className="text-center">
                  <RangeSwitch
                    el={el}
                    i={i}
                    handleIndex={handleIndex}
                    isSelected={selectedId === el.id}
                    selectedID={selectedID > 5}
                  />
                </div>
              ))}
          </div>
        </div>

        <Line
          data={data}
          options={config}
          plugins={[hoverLine]}
          className={styles.lineFill}
        />
      </div>
    </>
  );
}

export default LineFillCharts;
