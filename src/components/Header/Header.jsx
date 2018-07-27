// Core
import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import HeaderMenu from '../HeaderMenu';

// Actions
import userActions from '../../actions/user';

// Instruments
import { logo, title } from '../../metadata'

const Header = ({ actions, user }) => (
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
    <HeaderMenu user = { user } actions = { actions } />

  </div>
);

Header.propTypes = {
  user:    object,
  actions: object,
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...userActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
