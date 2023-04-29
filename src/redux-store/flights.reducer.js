import { FETCH_FLIGHTS_LIST, DATE_PICK } from './flights.actions';

const initialState = {
  flightsList: [],
  date: new Date().toISOString(),
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case DATE_PICK: {
      return {
        ...state,
        date: action.payload.date,
      };
    }
    default:
      return state;
  }
};
