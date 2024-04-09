import PropTypes from 'prop-types';
import React from 'react';

import { terminalStyle } from './flightsConfig';

const FlightsListItem = ({ props, direction }) => {
  const {
    airlineLogo,
    airlineName,
    arrivalCity,
    arrivalDate,
    arrivalDateExpected,
    departureCity,
    departureDate,
    departureDateExpected,
    terminal,
    codeShare,
  } = props;

  const time =
    direction === 'arrival'
      ? new Date(arrivalDate) || new Date(arrivalDateExpected)
      : new Date(departureDate) || new Date(departureDateExpected);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  return (
    <li className="flights__list-item">
      <span>
        <p className="flights__terminal" style={terminalStyle[terminal]}>
          {terminal}
        </p>
      </span>
      <span>{formattedTime}</span>
      <span>{direction === 'arrival' ? departureCity : arrivalCity}</span>
      {direction === 'departure' ? (
        <span>{time > new Date() ? 'Очікує вильоту' : `Вилетів о ${formattedTime}`}</span>
      ) : (
        <span>{time > new Date() ? 'Очікує прильоту' : `Прилетів о ${formattedTime}`}</span>
      )}
      <span>
        <img src={airlineLogo} alt="logo-airline" />
        {airlineName}
      </span>
      <span>{codeShare}</span>
    </li>
  );
};

FlightsListItem.propTypes = {
  props: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
};

export default FlightsListItem;
