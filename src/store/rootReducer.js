import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomeReducer from '../modules/home/reducer';
import SampleReducer from '../modules/sample/reducer';
import sessionReducer from './sessionReducer';
import { history } from './utils';

const appReducer = combineReducers({
  router: connectRouter(history),
  home: HomeReducer,
  sample: SampleReducer,
  session: sessionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

