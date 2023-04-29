import React, { memo, useState, useEffect, useRef } from 'react';

import './flightslist.scss';
import { useSelector } from 'react-redux';
import { sortedFlightsListSelector } from '../../../../redux-store/flights.selectors';

const FlightsList = ({ rowHeight, visibleRows, searchCity, direction }) => {
  const refUl = useRef();
  const [start, setStart] = useState(0);

  const flights = useSelector(state => {
    const sortedFlights = sortedFlightsListSelector(state);
    console.log(direction);
    if (searchCity) {
      return sortedFlights.filter(el =>
        direction === 'arrival'
          ? el.departureCity.toLowerCase().includes(searchCity.toLowerCase())
          : el.arrivalCity.toLowerCase().includes(searchCity.toLowerCase()),
      );
    } else {
      return sortedFlights;
    }
  });
  console.log(flights);
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
    <div className="flights-list">
      <div className="flights-list-titles">
        <p>Імя авіалінії</p>
        <p>Відправлення</p>
        <p>Дата відправлення</p>
        <p>Очікувана дата вильоту</p>
        <p>Прибуття</p>
        <p>Дата прибуття</p>
        <p>Очікувана дата прибуття</p>
        <p>Термінал</p>
        <p>Статус</p>
      </div>

      {flights.length === 0 ? (
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
              <span>{el.arrivalDate}</span>
              <span>{el.arrivalDateExpected}</span>
              <span>{el.departureCity}</span>
              <span>{el.departureDate}</span>
              <span>{el.departureDateExpected}</span>
              <span>{el.terminal}</span>
              <span>{el.status}</span>
            </li>
          ))}
          <div style={{ height: getBottomHeight() }} />
        </ul>
      )}
    </div>
  );
};
export default memo(FlightsList);
