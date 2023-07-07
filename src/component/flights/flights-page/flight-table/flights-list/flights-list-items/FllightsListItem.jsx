import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const FlightsListItem = ({ props, direction }) => {
  const {
    airline,
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
    time = arrivalDate || arrivalDateExpected;
  } else {
    time = departureDate || departureDateExpected;
  }
  const [datePart, timePart] = time.split(' ');
  const [day, month, year] = datePart.split('-');
  const [hours, minutes, seconds] = timePart.split(':');

  const date = new Date(year, month - 1, day, hours, minutes, seconds);
  if (date > new Date()) {
    console.log(10);
  }
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
        <span>{date > new Date() ? 'Очікує вильоту' : `Вилетів о ${formattedTime}`}</span>
      ) : (
        <span>{date > new Date() ? 'Очікує прильоту' : `Прилетів о ${formattedTime}`}</span>
      )}
      <span>
        <img src={airline.logo} alt="logo-airline" />
        {airline.name}
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
