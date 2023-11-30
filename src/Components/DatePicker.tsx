import { FC, useState } from "react";
import dayjs from "dayjs";

function DatePicker(): ReturnType<FC> {
  const [displayDate, setDisplayDate] = useState<dayjs.Dayjs>(
    dayjs().subtract(1, "day")
  );

  return (
    <div className="form-group mb-4">
      <label htmlFor="date-picker" className="form-label">
        <b>Get Analytics for Date</b>
      </label>
      <input
        type="date"
        className="form-control"
        id="date-picker"
        value={displayDate.format("YYYY-MM-DD")}
        onChange={(e) => setDisplayDate(dayjs(e.target.value))}
      />
    </div>
  );
}

export default DatePicker;
