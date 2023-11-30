import { useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

import { SingleParkingLotChartData } from "../types";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Legend,
  Tooltip
);

interface ParkingChartProps {
  lot: string;
  chartData: SingleParkingLotChartData;
}

function ParkingChart({ lot, chartData }: ParkingChartProps) {
  const chartRef = useRef<ChartJS>(null);

  return (
    <section className="mb-4">
      <h2>{`${lot} Parking Structure`}</h2>
      <div
        id={`${lot.toLowerCase()}-error`}
        className="alert alert-danger"
        style={{ display: "none" }}
      ></div>
      <div className="chart">
        <Chart
          ref={chartRef}
          type="line"
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
          data={chartData}
        />
      </div>
    </section>
  );
}

export default ParkingChart;
