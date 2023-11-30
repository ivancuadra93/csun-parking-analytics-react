import { useEffect, useState } from "react";
import Containter from "react-bootstrap/Container";
import dayjs from "dayjs";

import DatePicker from "./Components/DatePicker";
import ParkingChart from "./Components/ParkingChart";

import {
  ParkingLotChartData,
  ParkingLotHourChunk,
  RawParkingLotData,
} from "./types";
import { getChartData } from "./utils";
import { data } from "./constants";

import "./App.css";

function App() {
  const [displayDate, setDisplayDate] = useState<dayjs.Dayjs>(
    dayjs().subtract(1, "day")
  );
  const [chartsData, setChartsData] = useState<ParkingLotChartData>({});
  const [rawParkingLotData, setRawParkingLotData] = useState<RawParkingLotData>(
    {}
  );

  useEffect(() => {
    async function getParkingData() {
      // const rawData = await (await fetch("https://cors-anywhere.herokuapp.com/https://csun-parking-analytics.netlify.app/parking-data.json")).json();
      setRawParkingLotData(data);
    }

    getParkingData();
  }, [setRawParkingLotData]);

  useEffect(() => {
    if (Object.entries(rawParkingLotData).length === 0) return;

    const lots: { [lot: string]: string } = {
      B3: "b3-parking-chart",
      B5: "b5-parking-chart",
      G3: "g3-parking-chart",
      G6: "g6-parking-chart",
    };

    Object.entries(lots).forEach(([lot]) => {
      const hourChunk: ParkingLotHourChunk =
        rawParkingLotData[lot][displayDate.format("YYYY")][
          displayDate.format("MM")
        ][displayDate.format("DD")];
      const errorDiv = document.getElementById(`${lot.toLowerCase()}-error`);
      let labels: string[] = [];
      let data: number[] = [];

      try {
        [labels, data] = getChartData(hourChunk);
      } catch {
        if (errorDiv !== null) {
          errorDiv.innerText =
            "An unknown error occurred loading the data for this map";
          errorDiv.style.display = "block";
        }

        return;
      }

      if (errorDiv !== null) errorDiv.style.display = "none";

      const parkingData: ParkingLotChartData = {
        [lot]: {
          labels: labels,
          datasets: [
            {
              label: "Available Spots (approximately)",
              data: data,
              fill: true,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
      };

      setChartsData((prev) => ({ ...prev, ...parkingData }));
    });
  }, [displayDate, rawParkingLotData, setChartsData]);

  return (
    <div className="App">
      <Containter>
        <h1 className="mt-3">CSUN Parking Statistics by Hour</h1>
        <p>
          The data available on this website is free to use for any CSUN student
          or faculty. I don't grant permission to CSUN staff to use this data to
          build their own applications.
        </p>
        <p>
          Like this website?{" "}
          <a href="https://www.reddit.com/r/csun/comments/szcc9z/csun_parking_analytics_something_i_quickly_put/">
            Upvote it (or give feedback) on Reddit
          </a>{" "}
          and share it with your friends!
        </p>
        <p>
          <em>
            NOTE: These numbers are only as accurate as CSUN's Parking Services
            makes them.
          </em>
        </p>

        <section className="text-center mb-4">
          <p>
            <strong>
              Download the CSUN mobile app if you want near real-time statistics
              of parking availability
            </strong>
          </p>
          <a
            href="https://apps.apple.com/us/app/csun/id677332861"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Apple App Store button."
              width="170"
              src="https://www.csun.edu/sites/default/files/appstore.png"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=edu.csun.mobile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Google Play store button."
              height="60"
              width="170"
              src="https://www.csun.edu/sites/default/files/playstore.png"
            />
          </a>
        </section>

        <DatePicker displayDate={displayDate} setDisplayDate={setDisplayDate} />
        {Object.entries(chartsData).map(([lot, data]) => (
          <ParkingChart key={lot} lot={lot} chartData={data} />
        ))}
      </Containter>
    </div>
  );
}

export default App;
