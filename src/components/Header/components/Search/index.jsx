import React, { Component } from 'react';
import styles from './styles.scss';

class Search extends Component {

  render() {
    return (
      <input type="text" className={styles["search-input"]} placeholder="search"/>)
    }
};

export default Search;