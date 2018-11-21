import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Button extends Component {
  onButtonClick(onClick) {
    if (typeof onClick === 'function') {
      onClick();
    }
  }

  render() {
    return (
      <button className={classNames(styles.button, this.props.className)} onClick={() => this.onButtonClick(this.props.onClick)}>{this.props.caption}</button>)
    }
};

export default Button;