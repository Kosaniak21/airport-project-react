import React, { useEffect } from 'react';
import SearchForm from '../search/SearchForm';
import MainButtons from './MainButtons';
import './main.scss';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="main-container">
        <div className="main-search">
          <SearchForm />
          <MainButtons />
        </div>
      </div>
    </main>
  );
};

export default Main;
