import {format} from 'date-fns';

export const todayDate = format(new Date(), 'dd-MM-yyyy');

export const getDirectionFlights = (flight, direction) => {
  const localTime = direction === 'departure' ? flight.timeDepShedule : flight.timeToStand;
  const destination =
    direction === 'departure' ? flight['airportToID.city_en'] : flight['airportFromID.city_en'];
  const statusTime = direction === 'departure' ? flight.timeTakeofFact : flight.timeLandFact;
  const airlineName = flight.airline.en.name ? flight.airline.en.name : flight.airline.ru.name;
  return {
    id: flight.ID,
    terminal: flight.term,
    localTime,
    destination,
    statusTime,
    status: flight.status,
    airline: {
      logo: flight.airline.en.logoSmallName,
      name: airlineName,
    },
    flightN: flight.codeShareData[0].codeShare,
  };
};