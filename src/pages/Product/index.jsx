import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import PhotosAndDescription from 'Product/components/PhotosAndDescription';
import Characteristics from 'Product/components/Characteristics';
import Button from 'sharedComponents/Button';
import ButtonLike from 'Product/components/ButtonLike';
import Tags from 'Product/components/Tags';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characteristics: 
        [
          {name: 'Series', value: 'Mike & Spike'},
          {name: 'Country', value: 'Russia'},
          {name: 'Year', value: '2012'},
          {name: 'Weight', value: '50 kg'}
        ],
      photos: [
        {title: 'Photo1', href: '#'},
        {title: 'Photo2', href: '#'},
        {title: 'Photo3', href: '#'}       
      ],
      tags: ['Must buy' , 'Top seller', 'Fantastic', 'Great']
    }
  }

  render() {
    return (
      <div className={stylesBase.container}>
        <p>Products / Category B / Class A </p>
        <div className={styles['product-card']}>
          <PhotosAndDescription photoItems={this.state.photos}/>
          <div className={styles['characteristics-column']}>
            <Characteristics characteristics={this.state.characteristics}/> 
            <div className={styles["actions"]}>
              <Button className={styles["actions__button-buy"]} caption="Buy"/>
              <span className={styles["actions__button-buy-hint"]}>Buy this product!</span>
              <ButtonLike />
            </div>
            <Tags tags={this.state.tags} />
          </div>
        </div>
      </div>)
    }
};

export default Product;