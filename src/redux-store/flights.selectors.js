import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const dateSelector = state => dayjs(new Date(state.flights.date));
export const flightsListSelector = state => state.flights.flightsList;
export const isPendingSelector = state => state.flights.pending;
export const isDateCheckedSelector = state => state.flights.dateCheck;

export const sortedFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.toSorted((a, b) => {
    let dateA = a.departureDateExpected === 0 ? a.departureDate : a.departureDateExpected;
    let dateB = b.departureDateExpected === 0 ? b.departureDate : b.departureDateExpected;
    return (
      new Date(dayjs(dateB, 'DD-MM-YYYY HH:mm:ss').format()).getTime() -
      new Date(dayjs(dateA, 'DD-MM-YYYY HH:mm:ss').format()).getTime()
    );
  });
});
