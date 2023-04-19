import { SHOW_SPINNER, FLIGHTS_LIST_RECEIVED } from "./flights.actions";

const initialState = {
  isFetching: false,
  flightsList: [],
};

<<<<<<< HEAD
export const flightsReducer = (state = initialState, action) => {
=======
const flightsReducer = (state = initialState, action) => {
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FLIGHTS_LIST_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsData,
        isFetching: false,
      };
    default:
      return state;
  }
};
<<<<<<< HEAD
=======

export default flightsReducer;
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
