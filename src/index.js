// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// Instruments
import App from './containers/App';
import configureStore from './store/configureStore';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const store = configureStore(window.__INITIAL_STATE__);

window.render = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App store={store} />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
