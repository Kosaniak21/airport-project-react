import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Flight from './pages/Flight.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Layout from './pages/Layout.jsx';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': `Аєропорт "Київ"`,
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
        <Route index element={<Home />} />
        <Route path="departure" element={<Flight />} />
        <Route path="arrival" element={<Flight />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
