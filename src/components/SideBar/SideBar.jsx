// Core
import React, { Component } from 'react';
import classnames from 'classnames';
import { bool } from 'prop-types';

// Components
import MenuItem from '../../components/MenuItem'

class SideBar extends Component {
  state = {
    sidebarIsOpened: false,
  }

  handleOpenPress = () => {
    this.setState(({sidebarIsOpened}) => ({
      sidebarIsOpened: !sidebarIsOpened
    }));
  }

  render() {
    const { isVisible } = this.props;
    const { sidebarIsOpened } = this.state;

    return (
      <div className = { classnames(
        'sidebar',
        { 'opened': sidebarIsOpened },
        { 'show': isVisible }
        ) }>
        <button className = "change-size" onClick = { this.handleOpenPress } onKeyPress = { this.handleOpenPress } >
          <span>{ sidebarIsOpened ? '<' : '>' }</span>
        </button>
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
  }
}

SideBar.propTypes = {
  isVisible: bool,
};

export default SideBar;
