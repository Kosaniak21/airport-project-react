import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchPending, getFlightsList } from '../../../redux-store/flights.actions';
import { extractDate, extractNumber } from '../../../utils/extractData';
import SearchForm from '../../search/SearchForm';
import FlightTable from './flight-table/FlightTable';

import './flightspage.scss';

const FlightsPage = () => {
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
    <div className="flights-container">
      <SearchForm searchNumber={extractNumber(search)} />
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
