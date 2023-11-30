export type RawParkingLotData = {
  [lot: string]: {
    [year: string]: {
      [month: string]: {
        [day: string]: ParkingLotHourChunk;
      };
    };
  };
};

export type ParkingLotHourChunk = {
  [hour: string]: number[];
};

export type ParkingLotChartData = {
  [lot: string]: {
    labels: string[];
    datasets: [
      {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string;
        tension: number;
      }
    ];
  };
};

export type SingleParkingLotChartData = ParkingLotChartData[string];
