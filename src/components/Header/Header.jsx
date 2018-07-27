// Core
import React from 'react';

// Components
import HeaderMenu from '../HeaderMenu';

// Instruments
import { logo, title } from '../../metadata'

const Header = () => (
  <div className = "header">
    {/* logo */}
    <a href = "/">
      <img className = "header-logo" src = { logo } alt="logo" />
    </a>

    {/* title */}
    <div className = "header-title">
      <p>{ title }</p>
    </div>

    {/* menu */}
    <HeaderMenu />

  </div>
);

export default Header;
