import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchForm from '../../search/SearchForm';

import './flightspage.scss';
import FlightTable from './flight-table/FlightTable';
import { useLocation } from 'react-router-dom';
import { getFlightsList } from '../../../redux-store/flights.actions';

const FlightsPage = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);

  function extractCity(searchQuery) {
    const params = new URLSearchParams(searchQuery);
    const cityName = params.get('search');
    return cityName ? cityName.trim() : '';
  }

  useEffect(() => {
    if (direction) {
      dispatch(getFlightsList(direction));
    }
  }, [direction, search]);

  return (
    <div className="flights-container">
      <SearchForm searchCity={extractCity(search)} />
      <FlightTable searchCity={extractCity(search)} search={search} direction={direction} />
    </div>
  );
};

export default FlightsPage;
