import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const dateSelector = state => dayjs(new Date(state.flights.date));
export const flightsListSelector = state => state.flights.flightsList;

export const sortedFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.toSorted((a, b) => {
    // console.log(b.departureDateExpected, a.departureDateExpected);
    return (
      new Date(b.departureDateExpected).getTime() - new Date(a.departureDateExpected).getTime()
    );
  });
});
