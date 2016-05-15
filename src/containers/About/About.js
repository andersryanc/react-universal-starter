import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import config from '../../config';
import { Header, Humility } from 'components';

@connect(
  state => ({
    user: state.auth.user,
    loginError: state.auth.loginError,
    loggingIn: state.auth.loggingIn,
  }),
  authActions)
export default class About extends Component {
  static propTypes = {
    user: PropTypes.object,
    loggingIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
  }

  render() {
    const {user, logout} = this.props;
    // const styles = require('./About.scss');
    // const appStyles = require('../../theme/app.scss');

    return (
      <div className="hero is-success is-bold">
        <Helmet title="Login"/>

        <div className="hero-header">
          <Header />
        </div>

        <div className="hero-content">
          <div className="container">
            <h1 className="title">{config.app.title}</h1>
            <h2 className="subtitle">{config.app.description}</h2>

            {user && <div>
              <p>You are currently logged in as {user.name}.</p>
              <p>
                <button className="button is-semi-dark" onClick={logout}>
                  <span className="icon is-small"><i className="fa fa-sign-out"/></span>
                  Log Out
                </button>
              </p>
            </div>}
          </div>
        </div>

        <div className="hero-footer has-text-centered">
          <Humility />
        </div>
      </div>
    );
  }
}
