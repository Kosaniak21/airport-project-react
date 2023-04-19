import { flightsReducer } from "./features/flights/flights.reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});
export default store;
