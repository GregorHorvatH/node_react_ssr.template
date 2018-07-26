// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ '../Home'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ '../About'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const LoadablePage1 = Loadable({
  loader: () => import(/* webpackChunkName: 'page1' */ '../Page1'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const LoadablePage2 = Loadable({
  loader: () => import(/* webpackChunkName: 'page2' */ '../Page2'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const Mongo = Loadable({
  loader: () => import(/* webpackChunkName: 'mongo' */ '../Mongo'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const LoadablePage404 = Loadable({
  loader: () => import(/* webpackChunkName: 'page404' */ '../Page404'),
  loading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
});

const Content = () => (
  <div className = "content">
    <Switch>
      <Route exact path = "/" component = { LoadableHome } />
      <Route path = "/about" component = { LoadableAbout } />
      <Route path = "/page1" component = { LoadablePage1 } />
      <Route path = "/page2" component = { LoadablePage2 } />
      <Route path = "/mongo" component = { Mongo } />
      <Route path = "/*" component = { LoadablePage404 } />
    </Switch>
  </div>
);

export default Content;
