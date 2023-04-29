import React, { useRef, useState, useEffect } from 'react';

import './searchform.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateSelector } from '../../redux-store/flights.selectors';

const SearchForm = ({ searchCity }) => {
  const inputRef = useRef();
  const [searchFlight, setSearchFlight] = useState(searchCity || '');
  const search = searchFlight ? `?search=${searchFlight}` : '';

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
export default SearchForm;
