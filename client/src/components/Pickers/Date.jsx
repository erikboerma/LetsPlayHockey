import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import './Picker.css'

const MaterialUIPickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-01-30")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <label>
      Choose a Date:
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            // label="Choose a Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </label>
  );
};

export default MaterialUIPickers;
