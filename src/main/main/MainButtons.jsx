import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MainButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="main-search-buttons">
      <Link to="/departure" className="main-search-button">
        <i className="fa-sharp fa-solid fa-plane-departure"></i>
        ВИЛІТ УСІ РЕЙСИ
      </Link>
      <Link to="/arrival" className="main-search-button">
        ПРИЛІТ УСІ РЕЙСИ
        <i className="fa-sharp fa-solid fa-plane-arrival"></i>
      </Link>
    </div>
  );
};
export default MainButtons;
