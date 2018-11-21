import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import PhotosAndDescription from 'Product/components/PhotosAndDescription';
import Characteristics from 'Product/components/Characteristics';
import Button from 'sharedComponents/Button';
import ButtonLike from 'Product/components/ButtonLike';
import Tags from 'Product/components/Tags';
import Author from 'Product/components/Author';
import ProductItem from 'shared-components/ProductItem';

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
      tags: ['Must buy' , 'Top seller', 'Fantastic', 'Great'],
      authorProducts: 
      [
        {title: 'Product Z', price: '100 Zl', year: 2007, weight: '10 kg'},
        {title: 'Product A', price: '150 Zl', year: 2009, weight: '11 kg'},
        {title: 'Product M', price: '200 Zl', year: 2001, weight: '12 kg'},
        {title: 'Product C', price: '250 Zl', year: 2012, weight: '5 kg'},
        {title: 'Product X', price: '222220 Zl', year: 1917, weight: '2 kg'},
        {title: 'Product Q', price: '2150 Zl', year: 1990, weight: '1 kg'},
      ],
      similarProducts: 
      [
        {title: 'Similar Z', price: '1100 Zl', year: 2017, weight: '103 kg'},
        {title: 'Similar A', price: '1150 Zl', year: 2019, weight: '113 kg'},
        {title: 'Similar M', price: '1200 Zl', year: 2011, weight: '123 kg'},
        {title: 'Similar C', price: '1250 Zl', year: 2022, weight: '53 kg'},
       ],
    }
  }

  renderProductsList(productsList) {
    return (
      <div className={styles["products-list"]}>
        {_.map(productsList, (productItem) => (
            <ProductItem key={_.uniqueId()} productItem={productItem} className={styles['products-list__item']}>
              <div className={styles["products-list__item-floor-row"]}>
                <p>{productItem.title}</p>
                <p><strong>{productItem.price}</strong></p>
              </div>

              <div className={styles["products-list__item-floor-row"]}>
                <p>{productItem.year}</p>
                <p>{productItem.weight}</p>
              </div>
            </ProductItem>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className={stylesBase.container}>
        <hr/>
        <p>Products / Category B / Class A </p>

        <div className={styles["product-card"]}>
          <PhotosAndDescription photoItems={this.state.photos}/>

          <div className={styles["characteristics-column"]}>
            <Characteristics characteristics={this.state.characteristics}/> 

            <div className={styles["actions"]}>
              <Button className={styles["actions__button-buy"]} caption="Buy"/>
              <span className={styles["actions__button-buy-hint"]}>Buy this product!</span>
              <ButtonLike />
            </div>

            <Tags tags={this.state.tags} />
            <Author />
          </div>
        </div>
        
        <div className={styles["author-products"]}>
          <div className={styles["author-products__head"]}>
            <h2>Products from the author</h2>
            <Button caption="Buy all"/>
          </div>

          {this.renderProductsList(this.state.authorProducts)}
        </div>

        <div className={styles["similar-products"]}>
          <div className={styles["similar-products__head"]}>
            <h2>Similar products</h2>
          </div>

          {this.renderProductsList(this.state.similarProducts)}
        </div>
      </div>)
    }
};

export default Product;