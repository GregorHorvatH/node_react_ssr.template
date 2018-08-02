// Core
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { object } from 'prop-types';

// Components
import Header from '..//Header';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

// Instruments
import * as metadata from '../../metadata';
import { loadState } from '../../helpers';

// Actions
import userActions from '../../actions/user';

class App extends Component {
  state = {
    sidebarIsVisible: false
  };

  _handleVisiblePress = () => {
    this.setState(({ sidebarIsVisible }) => ({
      sidebarIsVisible: !sidebarIsVisible
    }));
  };

  componentDidMount() {
    this._loadState();
  }

  _loadState = async () => {
    const { store } = this.props;
    const { fillUser } = userActions;
    const { user } = (await loadState()) || {};

    if (user && user.login) {
      store.dispatch(fillUser(user));
    }
  };

  render() {
    const { sidebarIsVisible } = this.state;

    return (
      <div className="app">
        <Helmet
          title={metadata.title}
          meta={metadata.meta}
          link={metadata.link}
          script={metadata.script}
          noscript={metadata.noscript}
        />

        <Header onMenuPress={this._handleVisiblePress} />

        <div className="body">
          <SideBar isVisible={sidebarIsVisible} />
          <Content />
        </div>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  store: object
};

App.defaultProps = {
  store: {}
};

export default App;
