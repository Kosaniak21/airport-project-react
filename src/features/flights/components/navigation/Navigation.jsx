import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

const Navigation = ({ search }) => (
    <nav className="flights-navigation">
      <NavLink to={`/departure${search}`} activeClassName="selected" className="departures">
        <i className="fas fa-plane-departure" />
        Departures
      </NavLink>
      <NavLink to={`/arrival${search}`} activeClassName="selected" className="arrivals">
        <i className="fas fa-plane-arrival" />
        Arrivals
      </NavLink>
    </nav>
  );

export default Navigation;