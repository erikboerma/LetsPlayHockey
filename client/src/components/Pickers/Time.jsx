import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import './Picker.css'

const MaterialUIPickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date("21:11:54"));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled">
      Choose a Time:
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            // label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </label>
  );
};

export default MaterialUIPickers;
