import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import Home from 'container/Home';
import DetailsMovie from 'container/DetailsMovie';

export const history = createBrowserHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalhes/:id" component={DetailsMovie} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
