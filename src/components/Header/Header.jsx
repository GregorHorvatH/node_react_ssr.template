// Core
import React from 'react';

const Header = () => (
  <div className = "header">
    {/* logo */}
    <a href = "/">
      <img className = "header-logo" src = "./images/hg_logo.png" alt="logo" />
    </a>

    {/* title */}
    <div className = "header-title">
      <p>Lorem Ipsum - Your company</p>
    </div>

    {/* menu */}
    <div className = "header-menu">
      <i className = "fa fa-user-circle-o"></i>
      <ul className = "header-menu-list">
        <li>
          <i className = "item fa fa-flag-o"></i>
          <span>Language</span>
        </li>
        <li>
          <i className = "item fa fa-cog"></i>
          <span>Settings</span>
        </li>
        <hr color = "#E7E7E7" size = "1" />
        <li>
          <i className = "item fa fa-sign-out"></i>
          <span>Exit</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
