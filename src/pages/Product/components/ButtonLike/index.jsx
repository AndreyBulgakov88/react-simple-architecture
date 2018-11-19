import React, { Component } from 'react';
import styles from './styles.scss';

class ButtonLike extends Component {

  render() {
    return (
      <button className={styles['button-like']}>0 likes</button>)
    }
};

export default ButtonLike;