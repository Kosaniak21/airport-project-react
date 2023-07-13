import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchPending, getFlightsList } from '../../../redux-store/flights.actions';
import SearchForm from '../../search/SearchForm';
import FlightTable from './flight-table/FlightTable';
import './flightspage.scss';

const FlightsPage = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);
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
