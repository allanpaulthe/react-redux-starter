import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import axios from 'axios';
import { history } from './utils';
import rootReducer from './rootReducer';
import * as AppConstants from '../constants';
import clientMiddleware from './clientMiddleware';
import logger from 'redux-logger'
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
let baseUrl =
  AppConstants.API_HOST && AppConstants.API_PORT
    ? `${AppConstants.API_HOST}:${AppConstants.API_PORT}`
    : AppConstants.API_HOST;

const client = axios.create({
  baseURL: baseUrl,
  withCredentials: true
});

export default (options = { logger: true }) => {
  // Create a history depending on the environment

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const middleware = [
    thunk,
    routerMiddleware(history),
    clientMiddleware(client)
  ];

  if (process.env.NODE_ENV !== 'production' && options.logger) {
    // const { createLogger } = require('redux-logger');
    // const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  // Do we have preloaded state available? Great, save it.
  const initialState = {};

  // Delete it once we have it stored in a variable

  // Create the store
  const store = createStore(
    // connectRouter(history)(rootReducer),
    rootReducer,
    initialState,
    composedEnhancers
  );

  return {
    store,
    history
  };
};
