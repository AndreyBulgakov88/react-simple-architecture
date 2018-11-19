import React, { Component } from 'react';
import styles from './styles.scss';

class TagItem extends Component {

  render() {
    return (
      <span>{this.props.tag}</span>)
    }
};

export default TagItem;