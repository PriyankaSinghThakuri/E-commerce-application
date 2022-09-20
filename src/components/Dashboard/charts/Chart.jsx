import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (data) => {
  const Labels = data.data.map((bnd) => bnd.sub);
  const dataVal = data.data.map((val) => val.sem);
  const ChartData = {
    labels: Labels,
    datasets: [
      {
        label: "Brand Performance",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderwidth: 1,
        data: dataVal,
      },
    ],
  };
  return (
    <div
      style={{
        width: "50%",
        height: "400px",
        display: "inline-flex",
        backgroundColor: "antiquewhite",
      }}
    >
      <Bar
        options={{
          maintainAspectratio: false,
          title: {
            display: true,
            text: "Brand Performance Chart",
            fontSize: 25,
          },
          scale: {
            yAxe: [
              {
                ticks: {
                  beginAtZero: true,
                  fontSize: 15,
                  fontColor: "#000",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 16,
                  fontColor: "#000",
                },
              },
            ],
          },
        }}
        data={ChartData}
      ></Bar>
    </div>
  );
};

export default Chart;
