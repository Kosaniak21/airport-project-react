import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './table.scss';
import HeaderList from './header-list/HeaderList';
import BodyList from './body-list/BodyList';
import ChooseFlight from './ChooseFlight';

const Table = ({ searchedFlight }) => (
    <table className="flights-list">
      <HeaderList />
      <tbody>
        <Switch>
          <Route path="/:direction">
            <BodyList searchedFlight={searchedFlight} />
          </Route>
          <Route exact path="/">
            <ChooseFlight />
          </Route>
        </Switch>
      </tbody>
    </table>
  );

export default Table;