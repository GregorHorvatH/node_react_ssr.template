// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// Instruments
import App from './containers/App';
import configureStore from './utils/configureStore';

// Styles
import './styles/index.scss';

const store = configureStore(window.__INITIAL_STATE__);

window.render = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
