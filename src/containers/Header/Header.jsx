// Core
import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import HeaderMenu from '../../components/HeaderMenu';

// Actions
import userActions from '../../actions/user';

// Instruments
import { logo, title } from '../../metadata'

class Header extends Component {
  render() {
    const { actions, user, onMenuPress } = this.props;

    return (
      <div className = "header">
        {/* logo */}
        <div className = "header-left">
          <div
            className = "header-main-menu"
            onClick = { onMenuPress }
            onKeyPress = { onMenuPress }>
            <i className = "fa fa-bars" />
          </div>
          <a href = "/">
            <img className = "header-logo" src = { logo } alt="logo" />
          </a>
        </div>

        {/* title */}
        <div className = "header-title">
          <p>{ title }</p>
        </div>

        {/* menu */}
        <HeaderMenu
          user = { user }
          actions = { actions }
        />
    
      </div>
    );
  }
}

Header.propTypes = {
  user:    object,
  actions: object,
  onMenuPress: func,
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...userActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
