import { getDirectionFlights } from './flights.utils';

export const fetchFlightsList = direction =>
  fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then(flightsData =>
      flightsData
        .filter(flight =>
          direction === 'departure' ? flight.status === 'DP' : flight.status === 'AR',
        )
        .map(flight => {
          return getDirectionFlights(flight);
        }),
    )
    .catch(error => console.log(error.message));