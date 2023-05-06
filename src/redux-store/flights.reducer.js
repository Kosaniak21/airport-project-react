import { FETCH_FLIGHTS_LIST, DATE_PICK, FETCH_PENDING } from './flights.actions';

const initialState = {
  flightsList: [],
  date: new Date().toISOString(),
  pending: true,
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
        pending: false,
      };
    case DATE_PICK: {
      return {
        ...state,
        date: action.payload.date,
      };
    }
    case FETCH_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    default:
      return state;
  }
};
