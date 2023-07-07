import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';
import { getDatePick } from '../../redux-store/flights.actions';
import { dateSelector } from '../../redux-store/flights.selectors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1eb7ee',
    },
    secondary: lightBlue,
  },
});

dayjs.extend(customParseFormat);
export default function MyDatePicker({ searchDate }) {
  const date = useSelector(state => dateSelector(state));
  const dispatch = useDispatch();
  const handleDateChange = pickedDate => {
    dispatch(getDatePick(pickedDate.toISOString()));
  };

  const today = dayjs();

  useEffect(() => {
    dispatch(getDatePick(today.toISOString()));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Ваша дата"
            value={searchDate === '' ? today : date}
            onChange={handleDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

MyDatePicker.propTypes = {
  searchDate: PropTypes.string,
};
