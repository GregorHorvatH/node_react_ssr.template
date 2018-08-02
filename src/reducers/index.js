// Core
import { combineReducers } from 'redux';

// Reducers
import user from './user';

function lastAction(state, action) {
  return action;
}

const appReducer = combineReducers({
  // session,
  user,
  lastAction
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
