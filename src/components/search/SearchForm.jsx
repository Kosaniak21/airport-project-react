import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './searchform.scss';
import { Link } from 'react-router-dom';

const SearchForm = ({ searchNumber }) => {
  const inputRef = useRef();
  const [searchFlight, setSearchFlight] = useState(searchNumber || '');
  const search = searchFlight ? `?search=${searchFlight}` : ``;

  useEffect(() => {
    const inputEl = inputRef.current;
    if (inputEl) {
      if (searchNumber) {
        inputEl.value = searchNumber;
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
  }, [searchNumber]);

  return (
    <div className="search-form">
      <h1>ПОШУК РЕЙСУ</h1>
      <div className="search-form-block">
        <i className="fa-solid fa-magnifying-glass" />
        <input
          className="search-form-input"
          type="text"
          placeholder={searchNumber ? '' : 'Номер рейсу'}
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
  searchNumber: PropTypes.string,
};
export default SearchForm;
