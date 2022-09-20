import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { brand: "Apple", prod_no: 20 },
  { brand: "Lenovo", prod_no: 10 },
  { brand: "Baltra", prod_no: 6 },
  { brand: "HP", prod_no: 12 },
  { brand: "Samsung", prod_no: 15 },
  { brand: "Redmi", prod_no: 10 },
  { brand: "Acer", prod_no: 7 },
  { brand: "CG", prod_no: 20 },
];
export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper
        style={{
          height: "35rem",
          width: "50rem",
          marginLeft: "10rem",
          marginTop: "2rem",
          backgroundColor: "whitesmoke",
        }}
      >
        <Chart data={chartData}>
          <PieSeries valueField="prod_no" argumentField="brand" />
          <Title text="Brands with highest Products" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
