import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dateSelector } from './redux-store/flights.selectors.js';
import Home from './pages/Home.jsx';
import Flight from './pages/Flight.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Layout from './pages/Layout.jsx';
import { getDatePick } from './redux-store/flights.actions.js';

const titles = {
  '/': `Аеропорт "Київ"`,
  '/departure': `Розклад аєропорт "Київ"`,
  '/arrival': `Розклад аєропорт "Київ"`,
};
const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] ?? 'Airport Kiev';
  }, [location]);

  const date = useSelector(state => dateSelector(state));

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('date', JSON.stringify(date));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [date]);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const savedDate = JSON.parse(localStorage.getItem('date'));
    if (savedDate) {
      dispatch(getDatePick(savedDate));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="departure" element={<Flight />} />
        <Route path="arrival" element={<Flight />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
