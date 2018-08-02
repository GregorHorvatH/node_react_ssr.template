// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import PrivateRoute from '../components/PrivateRoute';

import {
  LoadableHome,
  LoadableAbout,
  LoadablePage1,
  LoadablePage2,
  Login,
  LoadablePage404,
} from './pages';

const Router = () => (
  <Switch>
    <PrivateRoute exact path = "/" component = { LoadableHome } />
    <PrivateRoute path = "/about" component = { LoadableAbout } />
    <PrivateRoute path = "/page1" component = { LoadablePage1 } />
    <PrivateRoute path = "/page2" component = { LoadablePage2 } />
    <Route path = "/login" component = { Login } />
    <Route path = "/*" component = { LoadablePage404 } />
  </Switch>
);

export default Router;
