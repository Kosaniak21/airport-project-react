<<<<<<< HEAD
import { fetchFlightsList } from "./flightsGateway";

export const SHOW_SPINNER = "FLIGHTS/SHOW_SPINNER";
export const FLIGHTS_LIST_RECEIVED = "FLIGHTS/FLIGHTS_LIST_RECEIVED";

export const showSpinner = () => ({ type: SHOW_SPINNER });

export const flightsListRecieved = (flightsData) => ({
  type: FLIGHTS_LIST_RECEIVED,
  payload: { flightsData },
});
export const getFlightsList = (direction) => {
  return (dispatch) => {
    dispatch(showSpinner());
    fetchFlightsList(direction).then((flightsList) =>
      dispatch(flightsListRecieved(flightsList))
    );
  };
=======
import {fetchFlightsList} from './flightsGateway';

export const SHOW_SPINNER = 'FLIGHTS/SHOW_SPINNER';
export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS/FLIGHTS_LIST_RECEIVED';

export const showSpinner = () => ({type: SHOW_SPINNER})

export const flightsListRecieved = flightsData => ({
    type: FLIGHTS_LIST_RECEIVED, payload: {flightsData}
})
export const getFlightsList = direction => {
    return dispatch => {
        dispatch(showSpinner());
        fetchFlightsList(direction).then(flightsList => dispatch(flightsListRecieved(flightsList)));
    };
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
};
