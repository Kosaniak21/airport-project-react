import React from 'react';
import PropTypes from 'prop-types';

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

  const terminalStyle = {
    C: {
      border: '2px solid #ff2121',
      color: '#ff2121',
    },
    D: {
      border: '2px solid #005dff',
      color: '#005dff',
    },
    B: {
      border: '2px solid #eeff00',
      color: '#eeff00',
    },
    E: {
      border: '2px solid #e500ff',
      color: '#e500ff',
    },
  };

  let time;

  if (direction === 'arrival') {
    time = new Date(arrivalDate) || new Date(arrivalDateExpected);
  } else {
    time = new Date(departureDate) || new Date(departureDateExpected);
  }

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
