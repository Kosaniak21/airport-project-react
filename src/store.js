<<<<<<< HEAD
import { flightsReducer } from "./features/flights/flights.reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});
export default store;
=======
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './features/flights/flights.reducer';


const store = createStore(reducer,applyMiddleware(thunk))

export default store;


>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
