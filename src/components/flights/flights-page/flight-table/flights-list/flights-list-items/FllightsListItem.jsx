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
    number,
  } = props;
  const terminalStyle = {
    border: '2px solid #02ea29',
    color: '#02ea29',
    borderRadius: '50%',
    height: '52px',
    width: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (terminal === 'C') {
    terminalStyle.border = '2px solid #ff2121';
    terminalStyle.color = '#ff2121';
  } else if (terminal === 'D') {
    terminalStyle.border = '2px solid #005dff';
    terminalStyle.color = '#005dff';
  } else if (terminal === 'B') {
    terminalStyle.border = '2px solid #eeff00';
    terminalStyle.color = '#eeff00';
  } else if (terminal === 'E') {
    terminalStyle.border = '2px solid #e500ff';
    terminalStyle.color = '#e500ff';
  }
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
    <li className="flights-list-item">
      <span>
        <span style={terminalStyle}>{terminal}</span>
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
      <span>{number}</span>
    </li>
  );
};

FlightsListItem.propTypes = {
  props: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
};

export default FlightsListItem;
