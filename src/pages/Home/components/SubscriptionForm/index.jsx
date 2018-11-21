import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import Button from 'sharedComponents/Button';

class SubscriptionForm extends Component {

  render() {
    return (
      <div>
        <h2 className={styles['title']}>Subscribe to our news</h2>
        <form className={styles['subscription-form']}>
          <div className={styles['subscription-form__field']}>
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" id="name" placeholder="name" />
          </div> 
          <div className={styles['subscription-form__field']}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email" />
          </div> 
          <Button caption="Subscribe"/>
        </form>
      </div>)
    }
};

export default SubscriptionForm;