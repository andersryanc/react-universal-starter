import React, {Component, PropTypes} from 'react';

export const types = [ 'primary', 'info', 'success', 'warning', 'danger' ];

export default class Notification extends Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
    dismiss: PropTypes.func,
  }

  render() {
    const { type, message, dismiss } = this.props;

    let typeClass = '';
    if ( typeof type !== 'undefined' && types.indexOf( type ) > -1 ) {
      typeClass = ` is-${type}`;
    }

    return (
      <div className={'notification' + typeClass}>
        {dismiss && <button className="delete" onClick={dismiss}></button>}
        { message }
      </div>
    );
  }
}
