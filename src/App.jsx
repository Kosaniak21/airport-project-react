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