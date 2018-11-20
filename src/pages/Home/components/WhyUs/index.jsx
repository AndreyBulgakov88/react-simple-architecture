import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import Button from 'sharedComponents/Button';

class Head extends Component {

  render() {
    return (
      <div>
        <h2 className={styles['title']}>Why should you choose us?</h2>  
        <div className={styles['reasons']}>
          <div className={styles['reasons__reason']}>
            <h3>Reason 1</h3>
            <p>
              The first and most important Reason
              is that we are really good
            </p>
          </div>
          <div className={styles['reasons__reason']}>
            <h3>Reason 2</h3>
            <p>
              The first and most important Reason
              is that we are really really good
            </p>
          </div>
          <div className={styles['reasons__reason']}>
            <h3>Reason 3</h3>
            <p>
              The first and most important Reason
              is that we are really really really good
            </p>
          </div>
        </div>
      </div>)
    }
};

export default Head;