import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import config from '../../config';
import { Header, Humility, Notification } from 'components';

@connect(
  state => ({
    user: state.auth.user,
    loginError: state.auth.loginError,
    loggingIn: state.auth.loggingIn,
  }),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    loginError: PropTypes.object,
    loggingIn: PropTypes.bool,
    login: PropTypes.func,
    clearLoginError: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.refs.username;
    const pass = this.refs.password;
    if ( !user.value.length ) {
      return;
    }

    this.props.login(user.value, pass.value).then(() => {
      // Success - User Logged In
      user.value = '';
      pass.value = '';
    }, () => {
      // Rejected - Error: loginError.message
      // TODO: Need to be able to "close" the error message below
    });
  }

  render() {
    const {user, loggingIn, loginError, clearLoginError} = this.props;
    // const styles = require('./Login.scss');
    // const appStyles = require('../../theme/app.scss');

    const loginButtonTxt = [];
    if ( !loggingIn ) {
      loginButtonTxt.push( <i className="fa fa-sign-in" /> );
      loginButtonTxt.push( <span>&nbsp;Log In</span> );
    }

    return (
      <div className="hero is-fullheight is-success is-bold">
        <Helmet title="Login"/>

        <div className="hero-header">
          <Header />
        </div>

        <div className="hero-content">
          <div className="container">
            {/* <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div> */}
            <h1 className="title">{config.app.title}</h1>
            <h2 className="subtitle">{config.app.description}</h2>

            {!user && <div>
              {loginError && <Notification message={loginError.message} type="warning" dismiss={() => clearLoginError()} />}

              <form className="login-form form-inline" onSubmit={this.handleSubmit}>
                <p className="control has-icon">
                  <input type="text" ref="username" placeholder="Username" className="input" required />
                  <i className="fa fa-user" />
                </p>
                <p className="control has-icon">
                  <input type="password" ref="password" placeholder="Password" className="input" />
                  <i className="fa fa-lock" />
                </p>
                <button className={'button is-semi-dark' + (loggingIn ? ' is-loading' : '')} onClick={this.handleSubmit}>
                  <span className="icon is-small"><i className="fa fa-sign-in" /></span>
                  Log In
                </button>
              </form>
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
