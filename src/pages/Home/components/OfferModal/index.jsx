import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import Button from 'sharedComponents/Button';

class OfferModal extends Component {

  render() {
    return (
      <div className={styles.modal}>
        <h4>This is modal window</h4>
        <p>and it's fixed on the screen</p>
        <Button className={styles['modal__button-clicker']} caption="Modal clicker"/>
        <span className={styles['modal__text-clicker']}>Got it!</span>
        <button className={styles['modal__button-close']}>x</button>
      </div>)
    }
};

export default OfferModal;