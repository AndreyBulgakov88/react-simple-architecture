import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import ProductItem from 'shared-components/ProductItem';
import Head from 'Home/components/Head';
import OfferModal from 'Home/components/OfferModal';
import WhyUs from 'Home/components/WhyUs';
import ActiveUsers from 'Home/components/ActiveUsers';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lastProducts: 
      [
        {title: 'Last Product Z', price: '100 Zl', year: 2007, weight: '10 kg'},
        {title: 'Last Product A', price: '150 Zl', year: 2009, weight: '11 kg'},
        {title: 'Last Product M', price: '200 Zl', year: 2001, weight: '12 kg'},
        {title: 'Last Product C', price: '250 Zl', year: 2012, weight: '5 kg'},
      ],
      favoriteProducts: 
      [
        {title: 'Favorite Z', price: '1100 Zl', year: 2017, weight: '103 kg'},
        {title: 'Favorite A', price: '1150 Zl', year: 2019, weight: '113 kg'},
        {title: 'Favorite M', price: '1200 Zl', year: 2011, weight: '123 kg'},
        {title: 'Favorite C', price: '1250 Zl', year: 2022, weight: '53 kg'},
      ],
      bestSellingProducts: 
      [
        {title: 'Top sell Z', price: '1100 Zl', year: 2017, weight: '103 kg'},
        {title: 'Top sell A', price: '1150 Zl', year: 2019, weight: '113 kg'},
        {title: 'Top sell M', price: '1200 Zl', year: 2011, weight: '123 kg'},
        {title: 'Top sell C', price: '1250 Zl', year: 2022, weight: '53 kg'},
      ],
    }
  }

  render() {
    return (
      <div>
        <Head />
        <OfferModal />
        <div className={stylesBase.container}>
          
          <div className={styles["last-products"]}>
            <div className={styles["last-products__head"]}>
              <h2>Last added products</h2>
              <a>Added today</a>
            </div>

            <div className={styles["last-products__items"]}>
              {_.map(this.state.lastProducts, (productItem) => (
                  <ProductItem key={_.uniqueId()} productItem={productItem}>

                    <div className={styles["last-products__item-floor-top"]}>
                      <p>{productItem.title}</p>
                      <p><strong>{productItem.price}</strong></p>
                    </div>

                    <div className={styles["last-products__item-floor-bottom"]}>
                      <p>{productItem.year}</p>
                      <p>{productItem.weight}</p>
                    </div>
                  </ProductItem>
                ))
              }
            </div>
          </div>

          <div className={styles["favorite-products"]}>
            <div className={styles["favorite-products__head"]}>
              <h2>Favorites among site users</h2>
              <a href="#">Users favorites</a>
            </div>

            <div className={styles["favorite-products__items"]}>
              {_.map(this.state.favoriteProducts, (productItem) => (
                  <ProductItem key={_.uniqueId()} productItem={productItem}>
                  
                    <div className={styles["favorite-products__item-floor-top"]}>
                      <p>{productItem.title}</p>
                      <p><strong>{productItem.price}</strong></p>
                    </div>

                    <div className={styles["favorite-products__item-floor-bottom"]}>
                      <p>{productItem.year}</p>
                      <p>{productItem.weight}</p>
                    </div>
                  </ProductItem>
                ))
              }
            </div>
          </div>
          <ActiveUsers />
          <WhyUs />    
        </div>

        <div className={styles['page-bottom']} />
      </div>)
    }
};

export default Home;