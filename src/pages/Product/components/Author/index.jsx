import React, { Component } from 'react';
import _ from 'lodash';
import styles from './styles.scss';
import Button from 'sharedComponents/Button';

class Author extends Component {

  render() {
    return (
      <div className={styles.author}>
        <div className={styles.info}>
          <img className={styles.info__avatar} src="#" />
          <div className={styles['info-name-rating']}>
            <p className={styles.info__name}>Author name</p>
            <div className={styles.rating}>
              <img className={styles['rating__star']} src="#" />
              <img className={styles['rating__star']} src="#" />
              <img className={styles['rating__star']} src="#" />
              <img className={styles['rating__star']} src="#" />
            </div>  
          </div>
        </div>
        <p>This is about author</p>
        <div className={styles.actions}>
          <Button caption="Send message"/>
          <Button caption="Add to friends"/> 
        </div>
      </div>)
    }
};

export default Author;