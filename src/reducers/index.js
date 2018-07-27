import { combineReducers } from 'redux';

import session from './sessionReducer';
import user from './user';

const appReducer = combineReducers({
  session,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

export * from './sessionReducer';
