import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout})
export default class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    isHero: PropTypes.bool,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const {user, isHero} = this.props;

    return (
      <header className={'header' + (isHero ? ' hero is-success' : '')}>
        <div className="container">
          <div className="header-left">
            <span className="header-item">{config.app.title}</span>

            {!user && <IndexLink to="/" className="header-tab" activeClassName="is-active">Login</IndexLink>}
            {/* !user && <Link to="/error" className="header-tab" activeClassName="is-active">Error</Link> */}
            {user && <Link to="/about" className="header-tab" activeClassName="is-active">About</Link>}
          </div>

          <span className="header-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="header-right header-menu">
            {user && <span className="header-item">
              Logged in as&nbsp;<strong>{user.name}</strong>
            </span>}
            {user && <span className="header-item">
              <Link to="/logout" className="button is-semi-dark" onClick={this.handleLogout}>Logout</Link>
            </span>}
          </div>
        </div>
      </header>
    );
  }
}
