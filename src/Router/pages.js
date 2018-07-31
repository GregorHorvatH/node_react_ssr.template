// Core
import Loadable from 'react-loadable';

// Components
import Loading from '../components/Loading';

export const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ '../components/Home'),
  loading: Loading
});

export const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ '../components/About'),
  loading: Loading
});

export const LoadablePage1 = Loadable({
  loader: () => import(/* webpackChunkName: 'page1' */ '../components/Page1'),
  loading: Loading
});

export const LoadablePage2 = Loadable({
  loader: () => import(/* webpackChunkName: 'page2' */ '../components/Page2'),
  loading: Loading
});

export const Mongo = Loadable({
  loader: () => import(/* webpackChunkName: 'mongo' */ '../components/Mongo'),
  loading: Loading
});

export const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'login' */ '../containers/LoginPage'),
  loading: Loading
});

export const LoadablePage404 = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'page404' */ '../components/Page404'),
  loading: Loading
});
