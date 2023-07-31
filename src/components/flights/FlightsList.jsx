import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { flightsListSelector } from '../../redux-store/flights.selectors';
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
