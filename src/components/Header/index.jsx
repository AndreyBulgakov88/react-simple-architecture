import React, { Component } from 'react';
import Panel from 'components/Header/components/Panel';
import Menu from 'components/Header/components/Menu';
import Search from 'components/Header/components/Search';

class Header extends Component {

  render() {
    return (
      <div>
        <Panel /> 
        <Menu /> 
        <Search /> 
      </div>)
    }
};

export default Header;