import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { sortedFlightsListSelector } from '../../../../../redux-store/flights.selectors';
import './flightslist.scss';
import FlightsListItem from './flights-list-items/FllightsListItem';

const FlightsList = ({ searchNumber, direction, searchDate }) => {
  const flights = useSelector(state => {
    let sortedFlights = sortedFlightsListSelector(state);
    if (searchNumber) {
      sortedFlights = sortedFlights.filter(el => {
        return el.number === searchNumber;
      });
    }
    if (searchDate !== '') {
      sortedFlights = sortedFlights.filter(flight => {
        if (direction === 'arrival') {
          return flight.arrivalDateExpected !== 0
            ? dayjs(searchDate, 'DD.MM.YYYY').isSame(
                dayjs(flight.arrivalDateExpected, 'DD-MM-YYYY'),
                'day',
              )
            : dayjs(searchDate, 'DD.MM.YYYY').isSame(
                dayjs(flight.arrivalDate, 'DD-MM-YYYY'),
                'day',
              );
        }
        if (direction === 'departure') {
          return flight.departureDateExpected !== 0
            ? dayjs(searchDate, 'DD.MM.YYYY').isSame(
                dayjs(flight.departureDateExpected, 'DD-MM-YYYY'),
                'day',
              )
            : dayjs(searchDate, 'DD.MM.YYYY').isSame(
                dayjs(flight.departureDate, 'DD-MM-YYYY'),
                'day',
              );
        }
      });
    } else {
      return sortedFlights;
    }
    return sortedFlights;
  });

  return (
    <>
      {flights.length === 0 ? (
        <h2 className="flights-list-without">Немає рейсів</h2>
      ) : (
        <ul className="flights-list-items">
          {flights.map(elProps => (
            <FlightsListItem props={elProps} key={elProps.id} direction={direction} />
          ))}
        </ul>
      )}
    </>
  );
};

FlightsList.propTypes = {
  searchCity: PropTypes.string,
  direction: PropTypes.string.isRequired,
  searchDate: PropTypes.string,
};

export default memo(FlightsList);
