import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'src/styles/base.scss';
import PhotosAndDescription from './components/PhotosAndDescription';
import Characteristics from './components/Characteristics';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {title: 'Photo1', href: '#'},
        {title: 'Photo2', href: '#'},
        {title: 'Photo3', href: '#'}       
      ]
    }
  }

  render() {
    return (
      <div className={stylesBase.container}>
        <p>Products / Class A / Product X</p>
        <div className={styles['photos-characteristics']}>
          <PhotosAndDescription photoItems={this.state.photos}/>
          <Characteristics /> 
        </div>
      </div>)
    }
};

export default Product;