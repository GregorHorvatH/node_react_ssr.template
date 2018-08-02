// Core
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { object } from 'prop-types';

// Components
import Header from '..//Header';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import * as metadata from '../../metadata';
import { loadState } from '../../helpers';

// Actions
import userActions from '../../actions/user';

// import store from '../../store/configureStore';

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
    const { fillUser } = this.props.actions;
    const { user } = await loadState();

    if (user && user.login) {
      fillUser(user);
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
  actions: object
};

App.defaultProps = {
  actions: {}
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...userActions }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(App);
