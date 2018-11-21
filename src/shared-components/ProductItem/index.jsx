import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class ProductItem extends Component {

  render() {
    return (
      <div className={classNames(styles['product-item'], this.props.className)}>
        <img className={styles['product-item__image']} src="#" />
        {this.props.children}
      </div>)
    }
};

export default ProductItem;