import { getDirectionFlights, todayDate } from './flights.utils';

export const fetchFlightsList = direction =>
  fetch(`https://api.iev.aero/api/flights/${todayDate}`)
    .then(res => {
      if (res.ok) {
<<<<<<< HEAD
=======
        console.log(res.json)
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
        return res.json();
      }
      throw new Error();
    })
    .then(flightsData =>
      flightsData.body[direction].map(flight => {
        return getDirectionFlights(flight, direction);
      }),
    )
    .catch(error => alert(error.message));