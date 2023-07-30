import dayjs from 'dayjs';

export const dateSelector = state => dayjs(new Date(state.flights.date));
export const flightsListSelector = state => state.flights.flightsList;
export const isPendingSelector = state => state.flights.pending;
export const isDateCheckedSelector = state => state.flights.dateCheck;
