import React, { Component } from 'react';
import styles from './styles.scss';
import Button from'sharedComponents/Button';

class Head extends Component {

  render() {
    return (
      <div className={styles.head}>
        <h3 className={styles['head__header']}>Product X (temporary created)</h3>
        <div className={styles['head__price']}>
          <p><strong>145 Zl</strong></p>
          <Button caption="Compare"/>
        </div>
      </div>)
    }
};

export default Head;