import { createSelector } from "@reduxjs/toolkit";

import { format } from "date-fns";
import { todayDate } from "./flights.utils";

export const isFetchingSelector = (state) => state.isFetching;
export const flightsListSelector = (state) => state.flightsList;

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector],
  (flightsList) => {
    return flightsList
      .filter(
        (flight) =>
          format(new Date(flight.localTime), "dd-MM-yyyy") === todayDate
      )
      .sort((a, b) => new Date(a.localTime) - new Date(b.localTime));
  }
);
