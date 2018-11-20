import React, { Component } from 'react';
import styles from './styles.scss';

class ProductItem extends Component {

  render() {
    return (
      <div className={styles['product-item']}>
        <img className={styles['product-item__image']} src="#" />
        {this.props.children}
      </div>)
    }
};

export default ProductItem;