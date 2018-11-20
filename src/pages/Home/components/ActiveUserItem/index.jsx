import React, { Component } from 'react';
import styles from './styles.scss';

class ActiveUserItem extends Component {

  render() {
    return (
      <div className={styles['active-user']}>
        <img src="#" />
        <p><strong>{this.props.activeUserItem.name}</strong></p>
        <p>{this.props.activeUserItem.role}</p>
      </div>
      )
    }
};

export default ActiveUserItem;