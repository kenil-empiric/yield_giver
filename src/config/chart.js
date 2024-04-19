//hoverLine plugins.
//filled line chart.
export const hoverLine = {
  id: "hoverLine",
  afterDatasetsDraw(chart, args, plugins) {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom, left, right, height, width },
      scales: { x, y },
    } = chart;

    if (tooltip._active.length > 0) {
      const xCoord = x.getPixelForValue(tooltip.dataPoints[0].dataIndex);
      // const yCoord = y.getPixelForValue(tooltip.dataPoints[0].parsed.y);
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = plugins.borderWidth;
      ctx.strokeStyle = plugins.borderColor;
      ctx.moveTo(xCoord, top); //for half vertical line use yCoord instance of top.
      ctx.lineTo(xCoord, bottom);
      ctx.stroke();
      ctx.closePath();
    }
  },
};

export const config = {
  type: "line",
  maintainAspectRatio: true,
  interaction: {
    intersect: false,
    mode: "nearest",
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      usePointStyle: true,
      yAlign: "top",
      padding: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
      titleFont: {
        size: 12,
      },
      bodyFont: {
        size: 10,
      },
      footerFont: {
        size: 10, // there is no footer by default
      },
      callbacks: {
        labelPointStyle: function (context) {
          return {
            pointStyle: "triangle",
            rotation: 0,
            backgroundColor: "blue",
          };
        },
      },
      // backgroundColor: "transparent",
      backgroundColor: "teal",
      borderColor: "#FFFFFF",
      borderWidth: 1,
      titleAlign: "center",
      bodyAlign: "center",
    },
    hoverLine: {
      borderColor: "#999DA0",
      borderWidth: 1,
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 0.4,
      to: 0.6,
      loop: true,
    },
  },
  scales: {
    x: {
      max: 2025,
      min: 0,
      ticks: { stepSize: 2 },
      grid: {
        drawOnChartArea: true,
        lineWidth: 0.5,
        color: `rgba(108,122, 137, 0.8)`,
      },
      display: true,
    },
    y: {
      max: 0.045,
      min: 0,
      ticks: { stepSize: 0.009 },
      beginAtZero: true,
      grid: {
        drawOnChartArea: true,
        lineWidth: 0.5,
        color: `rgba(108,122, 137, 0.8)`,
      },
      display: true,
    },
  },
};

//line chart.
export const configLine = {
  type: "line",
  plugins: {
    legend: {
      display: false,
    },
  },
  options: {
    maintainAspectRatio: false,
    responsive: false,
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 0.4,
      to: 0.6,
      loop: true,
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
      display: false,
    },
    y: {
      // min: 3,
      // max: 6,
      grid: {
        drawOnChartArea: false,
      },
      display: false,
    },
  },
};

//Piechart
export const textCenter = {
  id: "textCenter",
  afterDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      options,
      _active,
      chartArea: { top, bottom, left, right, height, width },
    } = chart;
    ctx.save();
    if (_active.length) {
      const datasetIndexValue = _active[0].index;
      const datasetNumber = data.datasets[0].data[datasetIndexValue];
      const dataLable = data.labels[datasetIndexValue];
      ctx.font = "bold 25px sans-serif";
      ctx.width = "10px";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgb(29 78 216)";
      ctx.textAlign = "center";
      ctx.fillText(
        dataLable + " " + datasetNumber,
        _active[0].element.x,
        _active[0].element.y
      );
    }
  },
};

export const options = {
  options: {
    maintainAspectRatio: false,
    responsive: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

//   const image = new Image();
//   image.src = "https://www.chartjs.org/img/chartjs-logo.svg";

//   const pl = {
//     id: "pl",
//     beforeDraw: (chart) => {
//       if (image.complete) {
//         const ctx = chart.ctx;
//         const { top, left, width, height } = chart.chartArea;
//         const x = left + width / 2 - image.width / 2;
//         const y = top + height / 2 - image.height / 2;
//         ctx.drawImage(image, x, y);
//       } else {
//         image.onload = () => chart.draw();
//       }
//     },
//   };
