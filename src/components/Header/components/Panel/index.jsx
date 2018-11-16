import React, { Component } from 'react';
import styles from './styles.scss';
import 'src/styles/base.scss';
import UserIcons from './components/UserIcons';
import Button from 'src/components/Button';

class Panel extends Component {

  render() {
    return (
      <div className={styles.panel}>
        <div className={styles.support}>
          <img className={styles.support__logo} src="#"/>
          <a href="#" className={styles.support__link}>Support</a>
          <a href="#" className={styles.support__link}>Forum</a>
        </div>
        <div className={styles["user-icons"]}>
          <UserIcons />
          <Button className={styles["user-icons__logout"]} caption="Logout"/>
        </div>
      </div>)
    }
};

export default Panel;