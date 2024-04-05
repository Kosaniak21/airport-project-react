import { fetchPending, getFlightsList } from '@redux-store/flights.actions';
import { isPendingSelector } from '@redux-store/flights.selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { extractDate, extractNumber } from '@utils/extractData';

import Buttons from '../buttons/Buttons';
import MyDatePicker from '../date-picker/MyDatePicker';
import SearchForm from '../search/SearchForm';
import Spinner from '../spinner/Spinner';
import FlightsList from './FlightsList';

import './flights.scss';

const Flights = () => {
  const isPending = useSelector(state => isPendingSelector(state));

  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);

  useEffect(() => {
    if (direction) {
      dispatch(fetchPending());
      dispatch(getFlightsList(direction));
    }
  }, [direction, search]);

  return (
    <div className="flights__container">
      <SearchForm searchNumber={extractNumber(search)} />
      <div className="flights__table">
        <Buttons search={search} />
        <div className="flights__date">
          <MyDatePicker searchDate={extractDate(search)} searchNumber={extractNumber(search)} />
        </div>
        <div className="flights__data">
          <div className="flights__list">
            <div className="flights__titles">
              <p>Термінал</p>
              <p>Розклад</p>
              {direction === 'departure' ? <p>Призначення</p> : <p>Відправлення</p>}
              <p>Статус</p>
              <p>Авіакомпанія</p>
              <p>Рейс</p>
            </div>
            {isPending ? (
              <Spinner />
            ) : (
              <FlightsList
                searchNumber={extractNumber(search)}
                direction={direction}
                searchDate={extractDate(search)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
