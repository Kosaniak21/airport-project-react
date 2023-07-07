import React from 'react';
import './flightstitles.scss';
import { PropTypes } from 'prop-types';
const FlightsTitles = ({ direction }) => {
  return (
    <div className="flights-table-titles">
      <p>Термінал</p>
      <p>Розклад</p>
      {direction === 'departure' ? <p>Призначення</p> : <p>Відправлення</p>}
      <p>Статус</p>
      <p>Авіакомпанія</p>
      <p>Рейс</p>
    </div>
  );
};

FlightsTitles.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default FlightsTitles;
