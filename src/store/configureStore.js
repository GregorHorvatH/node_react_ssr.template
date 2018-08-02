import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { saveState } from '../helpers';
import userTypes from '../actions/user/types';

// import thunk from 'redux-thunk';
// import saga from 'redux-saga';

import rootReducer from '../reducers';

// Environment check
const dev = process.env.NODE_ENV !== 'production'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const configureStore = (initialState, options = { logger: true }) => {
  const middleware = [
    // thunk
    // saga
  ];

  if (process.env.NODE_ENV !== 'production' && options.logger) {
    const logger = createLogger({ collapsed: true });

    middleware.push(logger);
  }

  // const persistedStore = loadState(initialState);

  const store = createStore(
    rootReducer,
    // persistedStore,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  const whiteList = [userTypes.LOGIN_USER, userTypes.LOGOUT_USER];

  // subscribe to any store changes and save changes to local storage
  store.subscribe(() => saveState(store.getState(), whiteList));

  return store;
};

export default configureStore;
