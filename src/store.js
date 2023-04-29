import { flightsReducer } from './redux-store/flights.reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});
export default store;
