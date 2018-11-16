import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'src/styles/base.scss';
import Panel from 'components/Header/components/Panel';
import Menu from 'components/Header/components/Menu';
import Search from 'components/Header/components/Search';
import classNames from 'classnames';

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
        <hr />
      </header>)
    }
};

export default Header;