import dayjs from 'dayjs';

export const getDirectionFlights = flight => {
  const airlineName = flight.airlineName ? flight.airlineName : '-';
  const formatedDateDep = flight.departureDate
    ? dayjs(flight.departureDate).format('DD-MM-YYYY HH:mm:ss')
    : '-';
  const formatedDateArr = flight.arrivalDate
    ? dayjs(flight.arrivalDate).format('DD-MM-YYYY HH:mm:ss')
    : '-';
  const formatedDateDepExp = flight.departureDateExpected
    ? dayjs(flight.departureDateExpected).format('DD-MM-YYYY HH:mm:ss')
    : '-';
  const formatedDateArrExp = flight.arrivalDateExpected
    ? dayjs(flight.arrivalDateExpected).format('DD-MM-YYYY HH:mm:ss')
    : '-';
  return {
    id: flight.id,
    terminal: flight.terminal,
    status: flight.status,
    arrivalCity: flight.arrivalCity,
    departureCity: flight.departureCity,
    arrivalDate: formatedDateArr,
    departureDate: formatedDateDep,
    arrivalDateExpected: formatedDateArrExp,
    departureDateExpected: formatedDateDepExp,
    airline: {
      logo: flight.airlineLogo,
      name: airlineName,
    },
  };
};
