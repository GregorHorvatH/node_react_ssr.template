// Core
import React from 'react';
import Helmet from 'react-helmet';

// Components
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

// Instruments
import * as metadata from '../../metadata';

const App = () => (
  <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />

    <Header />

    <div className="body">
      <SideBar />
      <Content />
    </div>

    <Footer />
  </div>
);

export default App;
