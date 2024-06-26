import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store';

const rootElement = document.querySelector('#root');

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
