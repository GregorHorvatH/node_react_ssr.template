// Core
import React from 'react';

// Components
import MenuItem from '../../components/MenuItem'

const SideBar = () => (
  <div className = "sidebar">
    <nav className = "sidebar-menu">
      <MenuItem icon = 'fa fa-ils' title = 'Home' />
      <MenuItem path = '/about' title = 'About' />
      <MenuItem path = '/page1' title = 'Page 1' />
      <MenuItem path = '/page2' title = 'Page 2' />
      <MenuItem path = '/mongo' title = 'Mongo' />

      <a href="/test" className="menu-item">
        <i className="fa fa-angle-right"></i>
        <span>Test</span>
      </a>
      <a href="/graphql" className="menu-item">
        <i className="fa fa-angle-right"></i>
        <span>Graph QL</span>
      </a>

    </nav>
  </div>
);

export default SideBar;
