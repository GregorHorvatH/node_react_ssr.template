// Core
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { any, object } from 'prop-types';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    const { login, token } = this.props.user;

    return (
      <Route {...rest} render={props => (
        login && token
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
    );
  }
}

PrivateRoute.propTypes = {
  component: any,
  user:      object,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(PrivateRoute);
