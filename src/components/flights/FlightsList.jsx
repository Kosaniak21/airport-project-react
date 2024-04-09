import { flightsListSelector } from '@redux-store/flights.selectors';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import FlightsListItem from './FllightsListItem';

const FlightsList = ({ searchNumber, direction, searchDate }) => {
  const flights = useSelector(state => {
    let flights = flightsListSelector(state);
    if (searchNumber) {
      flights = flights.filter(el => {
        return el.codeShare === searchNumber;
      });
    }
    return flights.filter(flight => {
      const expectedDate =
        direction === 'arrival' ? flight.arrivalDateExpected : flight.departureDateExpected;
      const actualDate = direction === 'arrival' ? flight.arrivalDate : flight.departureDate;

      const formattedSearchDate = dayjs(searchDate, 'DD.MM.YYYY');
      return (
        (expectedDate !== 0 && dayjs(expectedDate).isSame(formattedSearchDate, 'day')) ||
        dayjs(actualDate).isSame(formattedSearchDate, 'day')
      );
    });
  });

  return flights.length === 0 ? (
    <h2 className="flights__list-empty">Немає рейсів</h2>
  ) : (
    <ul className="flights__list-items">
      {flights.map(elProps => (
        <FlightsListItem props={elProps} key={elProps.id} direction={direction} />
      ))}
    </ul>
  );
};

FlightsList.propTypes = {
  searchNumber: PropTypes.string,
  direction: PropTypes.string.isRequired,
  searchDate: PropTypes.string,
};

export default memo(FlightsList);
