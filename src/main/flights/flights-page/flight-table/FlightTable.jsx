import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import MyDatePicker from '../../../../ui-elements/date-picker/MyDatePicker';
import Spinner from '../../../../ui-elements/spinner/Spinner';
import FlightsButton from './flights-buttons/FlightsButton';
import FlightsDateBtn from './flights-date-change/FlightsDateBtn';
import './flighttable.scss';
import FlightsTitles from './flights-titles/FlightsTitles';

const FlightsList = lazy(() => import('./flights-list/FlightsList'));

const FlightsTable = ({ searchCity, searchDate, search, direction }) => {
  return (
    <div className="flights-table">
      <FlightsButton search={search} />
      <div className="flights-table-date">
        <MyDatePicker searchDate={searchDate} />
        <FlightsDateBtn />
      </div>
      <div className="flights-table-data">
        <div className="flights-list">
          <FlightsTitles />
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
    </div>
  );
};

FlightsTable.propTypes = {
  searchCity: PropTypes.string,
  search: PropTypes.string,
  direction: PropTypes.string.isRequired,
  searchDate: PropTypes.string,
};
export default FlightsTable;
