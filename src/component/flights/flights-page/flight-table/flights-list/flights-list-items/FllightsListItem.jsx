import React from 'react';
import PropTypes from 'prop-types';

const FlightsListItem = ({ props }) => {
  const {
    airline,
    arrivalCity,
    arrivalDate,
    arrivalDateExpected,
    departureCity,
    departureDate,
    departureDateExpected,
    terminal,
    status,
    number,
  } = props;

  return (
    <li className="flights-list-item">
      <span>
        <img src={airline.logo} alt="logo-airline" />
        {airline.name}
      </span>
      <span>{number}</span>
      <span>{arrivalCity}</span>
      <span>{arrivalDate || '-'}</span>
      <span>{arrivalDateExpected || '-'}</span>
      <span>{departureCity}</span>
      <span>{departureDate || '-'}</span>
      <span>{departureDateExpected || '-'}</span>
      <span>{terminal}</span>
      <span>{status}</span>
      <div className="flights-list-divBtn">
        <button className="flights-list-button">BUY</button>
      </div>
    </li>
  );
};

FlightsListItem.propTypes = {
  props: PropTypes.object.isRequired,
};

export default FlightsListItem;
