import React from 'react';

import './main.scss';
import MainButtons from './MainButtons';
import SearchForm from '../search/SearchForm';
const Main = () => {
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
