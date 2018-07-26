// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';

const MenuItem = ({ path, icon, title }) => (
  <NavLink exact to = { path } className = 'menu-item'>
    <i className = { icon } />
    <span>{ title }</span>
  </NavLink>
);

MenuItem.propTypes = {
  path:  string,
  icon:  string,
  title: string
};

MenuItem.defaultProps = {
  path: '/',
  icon: 'fa fa-angle-right',
  title: 'Undefined title'
};

export default MenuItem;
