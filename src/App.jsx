import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dateChecker, getDatePick } from './redux-store/flights.actions.js';
import { dateSelector, isDateCheckedSelector } from './redux-store/flights.selectors.js';
import Home from './pages/Home.jsx';
import Flight from './pages/Flight.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Layout from './pages/Layout.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';

const titles = {
  '/': `Аеропорт "Київ"`,
  '/departure': `Розклад аєропорт "Київ"`,
  '/arrival': `Розклад аєропорт "Київ"`,
};
const App = () => {
  const [dateToLocalStorage, setDateToLocalStorage] = useLocalStorage('date');
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] ?? 'Airport Kiev';
  }, [location]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dateToLocalStorage) {
      dispatch(getDatePick(dateToLocalStorage));
    }
  }, [dispatch, dateToLocalStorage]);

  const date = useSelector(state => dateSelector(state));

  useEffect(() => {
    const handleBeforeUnload = () => {
      setDateToLocalStorage(date);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [date, setDateToLocalStorage]);

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
