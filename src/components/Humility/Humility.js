import React, { Component /* , PropTypes */ } from 'react';

// export const types = [ 'primary', 'info', 'success', 'warning', 'danger' ];

export default class Humility extends Component {
  // static propTypes = {
  //   type: PropTypes.string,
  //   message: PropTypes.string.isRequired,
  //   dismiss: PropTypes.func,
  // }

  render() {
    // const { type, message, dismiss } = this.props;
    const styles = require('./Humility.scss');

    return (
      <div className="container">
        <p className={styles.humility}>
          Created and maintained by <a href="https://twitter.com/andersryanc" target="_blank">@andersryanc</a>.
        </p>
      </div>
    );
  }
}
