import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateSelector } from '../../redux-store/flights.selectors';

const MainButtons = () => {
  const date = useSelector(state => dateSelector(state));

  return (
    <div className="main-search-buttons">
      <Link
        to={`/departure?search=&date=${dayjs(date).format('DD.MM.YYYY')}`}
        className="main-search-button"
      >
        <i className="fa-sharp fa-solid fa-plane-departure"></i>
        ВИЛІТ УСІ РЕЙСИ
      </Link>
      <Link
        to={`/arrival?search=&date=${dayjs(date).format('DD.MM.YYYY')}`}
        className="main-search-button"
      >
        ПРИЛІТ УСІ РЕЙСИ
        <i className="fa-sharp fa-solid fa-plane-arrival"></i>
      </Link>
    </div>
  );
};
export default MainButtons;
