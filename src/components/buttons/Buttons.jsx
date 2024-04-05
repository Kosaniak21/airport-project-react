import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const FlightsButton = ({ search }) => {
  const setActive = ({ isActive }) =>
    isActive ? 'flights__button flights__button_activeBtn' : 'flights__button';

  return (
    <div className="flights__buttons">
      <NavLink to={`/departure${search}`} className={setActive}>
        <i className="fa-sharp fa-solid fa-plane-departure" />
        ВИЛІТ
      </NavLink>
      <NavLink to={`/arrival${search}`} className={setActive}>
        ПРИЛІТ <i className="fa-sharp fa-solid fa-plane-arrival" />
      </NavLink>
    </div>
  );
};
FlightsButton.propTypes = {
  search: PropTypes.string,
};

export default FlightsButton;
