import React, { memo, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  isPendingSelector,
  sortedFlightsListSelector,
} from '../../../../../redux-store/flights.selectors';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import './flightslist.scss';

const FlightsList = ({ rowHeight, visibleRows, searchCity, direction, searchDate }) => {
  const refUl = useRef();
  const [start, setStart] = useState(0);
  const isPending = useSelector(state => isPendingSelector(state));

  const flights = useSelector(state => {
    const sortedFlights = sortedFlightsListSelector(state);
    if (searchCity) {
      return sortedFlights.filter(el =>
        direction === 'arrival'
          ? el.departureCity.toLowerCase().includes(searchCity.toLowerCase())
          : el.arrivalCity.toLowerCase().includes(searchCity.toLowerCase()),
      );
    }
    if (searchDate !== '') {
      return sortedFlights.filter(flight => {
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
  });
  function getTopHeight() {
    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (flights.length - (start + visibleRows + 1));
  }

  useEffect(() => {
    if (!refUl.current) {
      return;
    }
    function onScroll(e) {
      setStart(
        Math.min(flights.length - visibleRows - 1, Math.floor(e.target.scrollTop / rowHeight)),
      );
    }
    refUl.current.addEventListener('scroll', onScroll);

    return () => {
      if (refUl.current) {
        refUl.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [flights.length, visibleRows, rowHeight]);
  return (
    <>
      {!isPending && flights.length === 0 ? (
        <h2 className="flights-list-without">Немає рейсів</h2>
      ) : (
        <ul
          className="flights-list-items"
          ref={refUl}
          style={{ height: rowHeight * visibleRows + 1, overflowY: 'scroll' }}
        >
          <div style={{ height: getTopHeight() }} />
          {flights.slice(start, start + visibleRows + 1).map(el => (
            <li key={el.id} className="flights-list-item">
              <span>
                <img src={el.airline.logo} alt="logo-airline" />
                {el.airline.name}
              </span>
              <span>{el.arrivalCity}</span>
              <span>{el.arrivalDate || '-'}</span>
              <span>{el.arrivalDateExpected || '-'}</span>
              <span>{el.departureCity}</span>
              <span>{el.departureDate || '-'}</span>
              <span>{el.departureDateExpected || '-'}</span>
              <span>{el.terminal}</span>
              <span>{el.status}</span>
            </li>
          ))}
          <div style={{ height: getBottomHeight() }} />
        </ul>
      )}
    </>
  );
};

FlightsList.propTypes = {
  rowHeight: PropTypes.number.isRequired,
  visibleRows: PropTypes.number.isRequired,
  searchCity: PropTypes.string,
  direction: PropTypes.string.isRequired,
};

export default memo(FlightsList);
