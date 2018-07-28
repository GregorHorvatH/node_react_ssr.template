// Core
import React, { Component } from 'react';
import { object } from 'prop-types';

class HeaderMenu extends Component {
  handleLanguagePress = () => {
    console.log('change language'); // eslint-disable-line
  }

  handleSettingsPress = () => {
    console.log('settings'); // eslint-disable-line
  }

  handleLoginPress = () => {
    const { loginUser } = this.props.actions;

    loginUser('sfa');
  }

  handleLogoutPress = () => {
    const { logoutUser } = this.props.actions;

    logoutUser();
  }

  render() {
    const { login } = this.props.user;

    return (
      <div className = "header-right">
        <p className = "login">{ login }</p>
        <div className = "header-menu" >
          <i className = "fa fa-user-circle-o" />
          <ul className = "header-menu-list">
            <li onClick = { this.handleLoginPress } onKeyPress = { this.handleLoginPress }>
              <i className = "item fa fa-user" />
              <span>Login</span>
            </li>
            <li onClick = { this.handleLanguagePress } onKeyPress = { this.handleLanguagePress }>
              <i className = "item fa fa-flag-o" />
              <span>Language</span>
            </li>
            <li onClick = { this.handleSettingsPress } onKeyPress = { this.handleSettingsPress }>
              <i className = "item fa fa-cog" />
              <span>Settings</span>
            </li>
            <hr color = "#E7E7E7" size = "1" />
            <li onClick = { this.handleLogoutPress } onKeyPress = { this.handleLogoutPress }>
              <i className = "item fa fa-sign-out" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  actions:   object,
  user:      object,
};

export default HeaderMenu;
