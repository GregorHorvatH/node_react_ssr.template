// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  LoadableHome,
  LoadableAbout,
  LoadablePage1,
  LoadablePage2,
  Mongo,
  Login,
  LoadablePage404,
} from './pages';

const Router = () => (
  <Switch>
    <Route exact path = "/" component = { LoadableHome } />
    <Route path = "/about" component = { LoadableAbout } />
    <Route path = "/page1" component = { LoadablePage1 } />
    <Route path = "/page2" component = { LoadablePage2 } />
    <Route path = "/mongo" component = { Mongo } />
    <Route path = "/login" component = { Login } />
    <Route path = "/*" component = { LoadablePage404 } />
  </Switch>
);

export default Router;
