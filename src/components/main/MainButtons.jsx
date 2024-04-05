import { dateSelector } from '@redux-store/flights.selectors';
import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainButtons = () => {
  const date = useSelector(state => dateSelector(state));

  return (
    <div className="main-search__buttons">
      <Link
        to={`/departure?search=&date=${dayjs(date).format('DD.MM.YYYY')}`}
        className="main-search__button"
      >
        <i className="fa-sharp fa-solid fa-plane-departure" />
        ВИЛІТ УСІ РЕЙСИ
      </Link>
      <Link
        to={`/arrival?search=&date=${dayjs(date).format('DD.MM.YYYY')}`}
        className="main-search__button"
      >
        ПРИЛІТ УСІ РЕЙСИ
        <i className="fa-sharp fa-solid fa-plane-arrival" />
      </Link>
    </div>
  );
};
export default MainButtons;
