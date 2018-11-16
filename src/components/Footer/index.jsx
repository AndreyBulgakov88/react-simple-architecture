import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'src/styles/base.scss';
import classNames from 'classnames';
import Social from 'src/components/Social';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialItems: [
        {className: styles['social-facebook'], text: 'fb'},
        {className: styles['social-instagram'], text: 'ig'},
        {className: styles['social-twitter'], text: 'tw'},
        {className: styles['social-google'], text: 'go'}        
      ]
    }
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div className={classNames(styles["footer__columns"], stylesBase.container)}>
          <div className={styles.footer__column}>
            <h4>Change language</h4>
            <select>
              <option selected>English</option>
              <option>Русский</option>
              <option>Українська</option>
            </select>
          </div>
          <div className={styles.footer__column}>
            <h4>Wealthy</h4>
            <a href="#">About</a>
            <a href="#">Vacancies</a>
            <a href="#">Plans</a>
            <a href="#">Blog</a>
            <a href="#">Contacts</a>
          </div>
          <div className={styles.footer__column}>
            <h4>F.A.Q.</h4>
            <a href="#">Question / answer</a>
            <a href="#">Frequently asked questions</a>
          </div>
          <div className={styles.footer__column}>
            <h4>Support</h4>
            <a href="#">Forum</a>
            <a href="#">Send message</a>
            <a href="#">Outfits</a>
            <Social className={styles['footer__social-items']} socialItems={this.state.socialItems}/>
          </div>
        </div>
        <div className={styles.footer__end}>
          <div className={classNames(styles["footer__end-text"], stylesBase.container)}>
            <p>@Wealthy</p> 
            <p>(c)All rights reserved</p>
          </div>
        </div>  
      </footer>)
    }
};

export default Footer;