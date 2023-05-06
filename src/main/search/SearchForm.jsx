import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './searchform.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const SearchForm = ({ searchCity }) => {
  const inputRef = useRef();
  const [searchFlight, setSearchFlight] = useState(searchCity || '');
  const date = dayjs(useSelector(state => state.flights.date)).format('DD.MM.YYYY');
  const search = searchFlight ? `?search=${searchFlight}&date=${date}` : `?date=${date}`;

  useEffect(() => {
    const inputEl = inputRef.current;
    if (inputEl) {
      if (searchCity) {
        inputEl.value = searchCity;
        inputEl.placeholder = '';
      }
      inputEl.addEventListener('input', () => {
        setSearchFlight(inputEl.value);
      });
      return () => {
        inputEl.removeEventListener('input', () => {
          setSearchFlight(inputEl.value);
        });
      };
    }
  }, []);

  return (
    <div className="search-form">
      <h1>ПОШУК РЕЙСУ</h1>
      <div className="search-form-block">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-form-input"
          type="text"
          placeholder={searchCity ? '' : 'Номер рейсу або місто'}
          ref={inputRef}
        />
        <Link to={`/departure${search}`} className="search-form-btn">
          ЗНАЙТИ
        </Link>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  searchCity: PropTypes.string,
};
export default SearchForm;
