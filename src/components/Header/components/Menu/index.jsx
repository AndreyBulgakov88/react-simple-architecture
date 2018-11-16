import React, { Component } from 'react';
import styles from './styles.scss';
import MenuItem from './components/MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: ['Home', 'About', 'Blog', 'Services', 'Portfolio', 'Contacts', 'How it works?']
    }
  }

  render() {
    return (
      <nav className={styles.menu}>
        {_.map(this.state.menuItems, (menuItem) => (
            <MenuItem key={_.uniqueId()} name={menuItem} className={styles['menu__menu-item']}/>
          ))
        }
      </nav>)
    }
};

export default Menu;