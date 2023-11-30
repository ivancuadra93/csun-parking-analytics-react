import { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";

interface DatePickerProps {
  displayDate: dayjs.Dayjs;
  setDisplayDate: Dispatch<SetStateAction<dayjs.Dayjs>>;
}

function DatePicker({ displayDate, setDisplayDate }: DatePickerProps) {
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
