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
          <i className = "item fa fa-circle-thin"></i>
          <span>Menu item 1</span>
        </li>
        <li>
          <i className = "item fa fa-circle-thin"></i>
          <span>Menu item 2</span>
        </li>
        <li>
          <i className = "item fa fa-circle-thin"></i>
          <span>Menu item 3</span>
        </li>
        <hr color = "#446911" size = "1" />
        <li>
          <i className = "item exit fa fa-sign-out"></i>
          <span>Exit</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
