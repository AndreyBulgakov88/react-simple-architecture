import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import Panel from 'sharedComponents/Header/components/Panel';
import Menu from 'sharedComponents/Header/components/Menu';
import Search from 'sharedComponents/Header/components/Search';

class Header extends Component {

  render() {
    return (
      <header className={stylesBase.container}>
        <Panel /> 
        <hr />
        <div className={styles.menu}>
          <Menu /> 
          <Search /> 
        </div>
      </header>)
    }
};

export default Header;