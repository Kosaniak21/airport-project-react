import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateSelector } from '../../../../../redux-store/flights.selectors';
import { getDatePick } from '../../../../../redux-store/flights.actions';
import dayjs from 'dayjs';

import './flightsdatebtn.scss';

const setActive = ({ isActive }) => {
  return isActive ? 'flights-table-daylink active-Date' : 'flights-table-daylink';
};

const FlightsDateBtn = ({ searchDate, searchCity, direction }) => {
  const date = useSelector(state => dateSelector(state));
  const formatedDateToday = dayjs(new Date()).format('DD/MM');
  const formatedDateYesterday = dayjs(new Date()).subtract(1, 'day').format('DD/MM');
  const formatedDateTomorrow = dayjs(new Date()).add(1, 'day').format('DD/MM');
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(date);
  useEffect(() => {
    if (selectedDate !== date) {
      dispatch(getDatePick(selectedDate.toISOString()));
    }
  }, [selectedDate]);

  return (
    <div className="flights-table-days">
      <label className="flights-table-dayBtn">
        <input
          type="checkbox"
          className={setActive}
          onClick={() => {
            setSelectedDate(dayjs().subtract(1, 'day'));
          }}
        />
        <span>{formatedDateYesterday}</span>
        <p>ВЧОРА</p>
      </label>
      <label className="flights-table-dayBtn">
        <input
          type="checkbox"
          className={setActive}
          onClick={() => {
            setSelectedDate(dayjs());
          }}
        />
        <span>{formatedDateToday}</span>
        <p>СЬОГОДНІ</p>
      </label>
      <label className="flights-table-dayBtn">
        <input
          type="checkbox"
          className={setActive}
          onClick={() => {
            setSelectedDate(dayjs().add(1, 'day'));
          }}
        />
        <span>{formatedDateTomorrow}</span>
        <p>ЗАВТРА</p>
      </label>
    </div>
  );
};

export default FlightsDateBtn;
