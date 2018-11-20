import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import Button from 'sharedComponents/Button';

class Head extends Component {

  render() {
    return (
      <div className={styles.head}>
        <div className={stylesBase.container}>
          <h1>Welcome to our internet-shop!</h1>  
          <p>this text is simply description</p>
          <div className={styles['head__clicker']}>
            <Button className={styles['head__button-clicker']} caption="The clicker"/>
            <span>What it is?</span>
          </div>
        </div>
      </div>)
    }
};

export default Head;