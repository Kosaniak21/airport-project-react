import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import MyDatePicker from '../../../../ui-elements/date-picker/MyDatePicker';
import Spinner from '../../../../ui-elements/spinner/Spinner';
import FlightsButton from './flights-buttons/FlightsButton';
import FlightsDateBtn from './flights-date-change/FlightsDateBtn';
import './flighttable.scss';

const FlightsList = lazy(() => import('./flights-list/FlightsList'));

const FlightsTable = ({ searchCity, searchDate, search, direction }) => {
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
            searchDate={searchDate}
          />
        </Suspense>
      </div>
    </div>
  );
};

FlightsTable.propTypes = {
  searchCity: PropTypes.string,
  search: PropTypes.string,
  direction: PropTypes.string.isRequired,
};
export default FlightsTable;
