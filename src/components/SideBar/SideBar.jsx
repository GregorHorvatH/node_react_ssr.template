// Core
import React from 'react';

// Components
import MenuItem from '../../components/MenuItem'

const SideBar = () => (
  <div className = "sidebar">
    <nav className = "sidebar-menu">
      <MenuItem icon = 'fa fa-ils' title = 'Home' />
      <MenuItem icon = "fa fa-bell-o" path = '/about' title = 'About' />
      <MenuItem icon = "fa fa-calendar" path = '/page1' title = 'Page 1' />
      <MenuItem icon = "fa fa-laptop" path = '/page2' title = 'Page 2' />
      <MenuItem icon = "fa fa-map-o" path = '/mongo' title = 'Mongo' />

      <a href="/test" className="menu-item">
        <i className="fa fa-text-width"></i>
        <span>Test</span>
      </a>
      <a href="/graphql" className="menu-item">
        <i className="fa fa-database"></i>
        <span>Graph QL</span>
      </a>

    </nav>
  </div>
);

export default SideBar;
