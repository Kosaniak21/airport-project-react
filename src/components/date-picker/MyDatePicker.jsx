import { lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer as DatePickerContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getDatePick } from '@redux-store/flights.actions';
import { dateSelector } from '@redux-store/flights.selectors';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1eb7ee',
    },
    secondary: lightBlue,
  },
});

dayjs.extend(customParseFormat);
export default function MyDatePicker({ searchDate, searchNumber }) {
  const date = useSelector(state => dateSelector(state));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDateChange = pickedDate => {
    dispatch(getDatePick(pickedDate.toISOString()));
    navigate(`/departure?search${searchNumber}=&date=${dayjs(pickedDate).format('DD.MM.YYYY')}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Renamed here */}
        <DatePickerContainer components={['DatePicker']}>
          <DatePicker
            label="Ваша дата"
            value={
              searchDate !== dayjs(date).format('DD.MM.YYYY')
                ? dayjs(searchDate, 'DD.MM.YYYY')
                : dayjs(date)
            }
            onChange={handleDateChange}
            slotProps={{
              textField: {
                readOnly: true,
              },
            }}
          />
        </DatePickerContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

MyDatePicker.propTypes = {
  searchDate: PropTypes.string,
  searchNumber: PropTypes.string,
};
