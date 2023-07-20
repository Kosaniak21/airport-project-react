import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Flight from './components/flights/Flight.jsx';
import NoMatch from './components/nomatch/NoMatch.jsx';
import Layout from './components/Layout.jsx';
import Main from './components/main/Main.jsx';

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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="departure" element={<Flight />} />
        <Route path="arrival" element={<Flight />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
