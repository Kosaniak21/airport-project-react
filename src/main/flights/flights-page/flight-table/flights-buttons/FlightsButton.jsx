import React from 'react';
import { NavLink } from 'react-router-dom';
import './flightsbutton.scss';
const setActive = ({ isActive }) => {
  return isActive ? 'flights-table-button activeBtn' : 'flights-table-button';
};
const FlightsButton = ({ search }) => {
  return (
    <div className="flights-table-buttons">
      <NavLink to={`/departure${search}`} className={setActive}>
        <i className="fa-sharp fa-solid fa-plane-departure"></i>ВИЛІТ
      </NavLink>
      <NavLink to={`/arrival${search}`} className={setActive}>
        ПРИЛІТ <i className="fa-sharp fa-solid fa-plane-arrival"></i>
      </NavLink>
    </div>
  );
};

export default FlightsButton;
