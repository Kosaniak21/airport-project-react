<<<<<<< HEAD
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import Search from "./features/flights/components/search/Search";
import Footer from "./features/flights/components/footer/Footer";
import Header from "./features/flights/components/header/Header";

const App = () => (
  <Provider store={store}>
    <Header />
    {/* <div className="search-flights">
      <Search />
    </div> */}

    {/* <Footer /> */}
  </Provider>
);

export default App;
=======
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Search from './features/flights/components/search/Search';

const App = () => (
    <Provider store={store}>
      <Router>
        <div className="search-flights">
          <Search />
        </div>
      </Router>
    </Provider>
  );

export default App;
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
