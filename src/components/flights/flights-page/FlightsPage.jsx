import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchPending, getFlightsList } from '../../../redux-store/flights.actions';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { dateSelector } from '../../../redux-store/flights.selectors';
import SearchForm from '../../search/SearchForm';
import FlightTable from './flight-table/FlightTable';
import './flightspage.scss';
import dayjs from 'dayjs';

const FlightsPage = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);
  const navigate = useNavigate();
  const date = useSelector(state => dateSelector(state));
  const [prevDate, setPrevDate] = useState(date);

  function extractNumber(searchQuery) {
    const params = new URLSearchParams(searchQuery);
    const cityName = params.get('search');
    return cityName ? cityName.trim() : '';
  }

  function extractDate(searchQuery) {
    const params = new URLSearchParams(searchQuery);
    const date = params.get('date');
    return date ? date.trim() : '';
  }

  useEffect(() => {
    if (direction) {
      dispatch(fetchPending());
      dispatch(getFlightsList(direction));
    }
  }, [direction, search]);

  useEffect(() => {
    if (date.valueOf() !== prevDate.valueOf()) {
      navigate(
        `/${direction}?search=${extractNumber(search)}&date=${dayjs(date).format('DD.MM.YYYY')}`,
      );
      setPrevDate(date);
    }
  }, [date, prevDate, direction, search]);

  return (
    <div className="flights-container">
      <SearchForm searchCity={extractNumber(search)} />
      <FlightTable
        searchNumber={extractNumber(search)}
        searchDate={extractDate(search)}
        search={search}
        direction={direction}
      />
    </div>
  );
};

export default FlightsPage;
