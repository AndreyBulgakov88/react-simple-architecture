import React, { Component } from 'react';

class MenuItem extends Component {

  render() {
    return (
      <a className={this.props.className} href="#">{this.props.name}</a>)
    }
};

export default MenuItem;