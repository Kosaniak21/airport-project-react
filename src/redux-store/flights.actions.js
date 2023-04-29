import { fetchFlightsList } from './flightsGateway';

export const FETCH_FLIGHTS_LIST = 'FLIGHTS/FETCH_FLIGHTS_LIST';
export const DATE_PICK = 'FLIGHTS/DATE_PICK';

export const flightsListRecieved = flightsList => ({
  type: FETCH_FLIGHTS_LIST,
  payload: { flightsList },
});

export const getFlightsList = direction => {
  return dispatch => {
    fetchFlightsList(direction).then(flightsList => {
      dispatch(flightsListRecieved(flightsList));
    });
  };
};

export const getDatePick = date => ({
  type: DATE_PICK,
  payload: { date },
});
