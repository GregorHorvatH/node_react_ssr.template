// Core
import React, { Component } from 'react';

class HeaderMenu extends Component {
  handleLanguagePress = () => {
    console.log('change language'); // eslint-disable-line
  }

  handleSettingsPress = () => {
    console.log('settings'); // eslint-disable-line
  }

  handleExitPress = () => {
    console.log('exit'); // eslint-disable-line
  }

  render() {
    return (
      <div className = "header-menu">
        <i className = "fa fa-user-circle-o"></i>
        <ul className = "header-menu-list">
          <li onClick = { this.handleLanguagePress } onKeyPress = { this.handleLanguagePress }>
            <i className = "item fa fa-flag-o"></i>
            <span>Language</span>
          </li>
          <li onClick = { this.handleSettingsPress } onKeyPress = { this.handleSettingsPress }>
            <i className = "item fa fa-cog"></i>
            <span>Settings</span>
          </li>
          <hr color = "#E7E7E7" size = "1" />
          <li onClick = { this.handleExitPress } onKeyPress = { this.handleExitPress }>
            <i className = "item fa fa-sign-out"></i>
            <span>Exit</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
