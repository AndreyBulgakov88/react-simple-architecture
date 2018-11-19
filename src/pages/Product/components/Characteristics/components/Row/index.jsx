import React, { Component } from 'react';
import styles from './styles.scss';
class Row extends Component {

  render() {
    return (
      <div>
        <div className={styles.row}>
          <p>{this.props.name}</p> 
          <p>{this.props.value}</p> 
        </div>
        <hr />
      </div>)
    }
};

export default Row;