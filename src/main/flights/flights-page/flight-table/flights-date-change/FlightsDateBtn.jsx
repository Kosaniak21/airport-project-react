import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateSelector } from '../../../../../redux-store/flights.selectors';
import { getDatePick } from '../../../../../redux-store/flights.actions';
import dayjs from 'dayjs';

import './flightsdatebtn.scss';

const FlightsDateBtn = () => {
  const date = useSelector(state => dateSelector(state));
  const dispatch = useDispatch();
  const [dates, setDates] = useState([
    {
      date: dayjs().subtract(1, 'day'),
      isActive: false,
    },
    {
      date: dayjs(),
      isActive: false,
    },
    {
      date: dayjs().add(1, 'day'),
      isActive: false,
    },
  ]);

  useEffect(() => {
    const selectedDate = dates.find(date => date.isActive)?.date;
    if (selectedDate && selectedDate !== date) {
      dispatch(getDatePick(selectedDate.toISOString()));
    }
  }, [dates]);

  const handleDateChange = index => {
    const newDates = dates.map((date, i) => ({
      ...date,
      isActive: index === i,
    }));
    setDates(newDates);
  };
  return (
    <div className="flights-table-days">
      {dates.map((date, index) => (
        <label key={index} className="flights-table-dayBtn">
          <input type="checkbox" onChange={() => handleDateChange(index)} checked={date.isActive} />
          <p>
            <span>{date.date.format('DD/MM')}</span>
            {index === 0 ? 'ВЧОРА' : index === 1 ? 'СЬОГОДНІ' : 'ЗАВТРА'}
          </p>
        </label>
      ))}
    </div>
  );
};

export default FlightsDateBtn;
