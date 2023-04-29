import React, { Suspense, lazy } from 'react';

import MyDatePicker from '../../../../ui-elements/date-picker/MyDatePicker';
import './flighttable.scss';
import Spinner from '../../../../ui-elements/spinner/Spinner';

import FlightsButton from './flights-buttons/FlightsButton';
import FlightsDateBtn from './flights-date-change/FlightsDateBtn';

const FlightsList = lazy(() => import('../flights-list/FlightsList'));

const FlightsTable = ({ searchCity, search, direction }) => {
  return (
    <div className="flights-table">
      <FlightsButton search={search} />
      <div className="flights-table-date">
        <MyDatePicker />
        <FlightsDateBtn search={search} direction={direction} />
      </div>
      <div className="flights-table-data">
        <Suspense fallback={<Spinner />}>
          <FlightsList
            searchCity={searchCity}
            rowHeight={90}
            visibleRows={5}
            direction={direction}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default FlightsTable;
