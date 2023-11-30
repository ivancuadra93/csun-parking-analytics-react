import { ParkingLotHourChunk } from './types';

export function getChartData(dayWorthOfData: ParkingLotHourChunk): [string[], number[]] {
  let labels: string[] = [];
  let data: number[] = [];

  Object.keys(dayWorthOfData)
    .sort()
    .forEach((hour) => {
      const availabilities: number[] = dayWorthOfData[hour];

      labels.push(`${hour}:00`);
      labels = labels.concat(new Array(availabilities.length - 1).fill(""));
      data = data.concat(availabilities);
    });

  return [labels, data];
}
