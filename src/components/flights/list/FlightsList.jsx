import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { sortedFlightsListSelector } from '../../../redux-store/flights.selectors';
import './flightslist.scss';
import FlightsListItem from './FllightsListItem';

const FlightsList = ({ searchNumber, direction, searchDate }) => {
  const flights = useSelector(state => {
    let sortedFlights = sortedFlightsListSelector(state);
    if (searchNumber) {
      sortedFlights = sortedFlights.filter(el => {
        return el.codeShare === searchNumber;
      });
    }
    return sortedFlights.filter(flight => {
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
  console.log(flights);
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
