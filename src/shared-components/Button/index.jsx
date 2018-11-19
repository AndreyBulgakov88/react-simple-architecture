import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Button extends Component {

  render() {
    return (
      <button className={classNames(styles.button, this.props.className)}>{this.props.caption}</button>)
    }
};

export default Button;