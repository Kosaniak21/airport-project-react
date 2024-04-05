import { configureStore } from '@reduxjs/toolkit';

import { flightsReducer } from './redux-store/flights.reducer';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});

export default store;
