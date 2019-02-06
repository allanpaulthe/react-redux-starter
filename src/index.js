import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';


const { store, history } = configureStore();

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector('#root');

render(Application, root);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
