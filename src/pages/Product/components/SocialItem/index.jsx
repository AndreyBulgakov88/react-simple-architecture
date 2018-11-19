import React, { Component } from 'react';

class SocialItem extends Component {

  render() {
    return (
      <a href="#" className={this.props.className}>{this.props.text}</a>)
    }
};

export default SocialItem;