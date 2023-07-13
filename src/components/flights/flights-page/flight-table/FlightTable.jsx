import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MyDatePicker from './date-picker/MyDatePicker';
import Spinner from './spinner/Spinner';
import FlightsButton from './flights-buttons/FlightsButton';
import './flighttable.scss';
import FlightsTitles from './flights-titles/FlightsTitles';
import { isPendingSelector } from '../../../../redux-store/flights.selectors';
import FlightsList from './flights-list/FlightsList';

const FlightsTable = ({ searchNumber, searchDate, search, direction }) => {
  const isPending = useSelector(state => isPendingSelector(state));

  return (
    <div className="flights-table">
      <FlightsButton search={search} />
      <div className="flights-table-date">
        <MyDatePicker searchDate={searchDate} searchNumber={searchNumber} />
      </div>
      <div className="flights-table-data">
        <div className="flights-list">
          <FlightsTitles direction={direction} />
          {isPending ? (
            <Spinner />
          ) : (
            <FlightsList
              searchNumber={searchNumber}
              direction={direction}
              searchDate={searchDate}
            />
          )}
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
