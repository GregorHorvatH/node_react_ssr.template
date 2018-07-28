// Core
import React, { Component } from 'react';
import Helmet from 'react-helmet';

// Components
import Header from '..//Header';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

// Instruments
import * as metadata from '../../metadata';

class App extends Component {
  state = {
    sidebarIsVisible: false
  };

  _handleVisiblePress = () => {
    this.setState(({ sidebarIsVisible }) => ({
      sidebarIsVisible: !sidebarIsVisible
    }));
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

export default App;
