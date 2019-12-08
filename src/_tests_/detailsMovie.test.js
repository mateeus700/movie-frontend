import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Switch } from 'react-router';
import DetailsMovie from 'container/DetailsMovie';
import Header from 'components/Header';
import Details from 'components/Details';
import Home from 'container/Home';

it('renders without crashing', () => {
  const history = createBrowserHistory();

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <DetailsMovie>
            <Header />
            <Details />
          </DetailsMovie>
        </Switch>
      </ConnectedRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
