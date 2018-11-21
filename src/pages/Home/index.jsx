import React, { Component } from 'react';
import styles from './styles.scss';
import stylesBase from 'styles/base.scss';
import ProductItem from 'sharedComponents/ProductItem';
import Head from 'Home/components/Head';
import OfferModal from 'Home/components/OfferModal';
import WhyUs from 'Home/components/WhyUs';
import ActiveUsers from 'Home/components/ActiveUsers';
import SubscriptionForm from 'Home/components/SubscriptionForm';
import ForumTopicItem from 'Home/components/ForumTopicItem';
import Button from 'sharedComponents/Button';
import classNames from 'classnames';

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
      yourOutfit: {title: 'Your best outfit', price: '2250 Zl', year: 2012, likes: 48},
      remainsOutfits: 
      [
        {price: '100 Zl', year: 2007, likes: '10 kg'},
        {price: '150 Zl', year: 2009, likes: '11 kg'},
        {price: '200 Zl', year: 2001, likes: '12 kg'},
        {price: '250 Zl', year: 2012, likes: '5 kg'},
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
      randomProducts: 
      [
        {title: 'Random Z', year: 2017, sales: 0},
        {title: 'Random A', year: 2019, sales: 12},
        {title: 'Random M', year: 2011, sales: 23},
        {title: 'Random C', year: 2022, sales: 3},
      ],
      forumTopics: 
      [
        {
          title: 'Where can I buy this product for lowest price?', 
          description: 'For many ears I bought products in random shops. Now everything changes.', 
          author: 
          {
            name: 'Kate',
            role: 'Manager',
          },
          messages: 20
        },
        {
          title: 'Where can I buy this product for lowest price?', 
          description: 'For many ears I bought products in random shops. Now everything changes.', 
          author: 
          {
            name: 'Kate',
            role: 'Manager',
          },
          messages: 20
        },
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

                    <div className={styles["last-products__item-floor-row"]}>
                      <p>{productItem.title}</p>
                      <p><strong>{productItem.price}</strong></p>
                    </div>

                    <div className={styles["last-products__item-floor-row"]}>
                      <p>{productItem.year}</p>
                      <p>{productItem.weight}</p>
                    </div>
                  </ProductItem>
                ))
              }
            </div>
          </div>

          <div className={styles["outfits"]}>
            <div className={styles["your-outfit"]}>
              <h2>Your outfit</h2>
              <img className={styles["your-outfit__image"]} src="#" />
              <button className={classNames(styles["your-outfit__button"], styles["your-outfit__button-close"])}>x</button>
              <button className={classNames(styles["your-outfit__button"], styles["your-outfit__button-like"])}>o</button>
              <div className={styles["your-outfit__floor"]}>
                <img className={styles["your-outfit__avatar"]} src="#" />
                <div className={styles["your-outfit__floor-column"]}>
                  <p><strong>{this.state.yourOutfit.title}</strong></p>
                  <p>{this.state.yourOutfit.likes}</p>
                </div>

                <div className={styles["your-outfit__floor-column"]}>
                  <p><strong>{this.state.yourOutfit.price}</strong></p>
                  <p>{this.state.yourOutfit.year}</p>
                </div>  
              </div>  
              <Button className={styles["your-outfit__button-details"]} caption="Product details"/>
            </div>

            <div className={styles["remains-outfits"]}>
              <div className={styles["remains-outfits__head"]}>
                <h3>Remains outfits</h3>
                <a>All remains outfits</a>
              </div>

              <div className={styles["remains-outfits__items"]}>
                {_.map(this.state.remainsOutfits, (productItem) => (
                    <ProductItem key={_.uniqueId()} productItem={productItem}>

                      <div className={styles["remains-outfits__item-floor-row"]}>
                        <p><strong>{productItem.price}</strong></p>
                        <p>{productItem.likes}</p>
                      </div>

                      <div className={styles["remains-outfits__item-floor-row"]}>
                        <p>{productItem.year}</p>
                      </div>
                    </ProductItem>
                  ))
                }
              </div>
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
                  
                    <div className={styles["favorite-products__item-floor-row"]}>
                      <p>{productItem.title}</p>
                      <p><strong>{productItem.price}</strong></p>
                    </div>

                    <div className={styles["favorite-products__item-floor-row"]}>
                      <p>{productItem.year}</p>
                      <p>{productItem.weight}</p>
                    </div>
                  </ProductItem>
                ))
              }
            </div>
          </div>

          <div className={styles["random-products"]}>
            <div className={styles["random-products__head"]}>
              <h2>Random products</h2>
              <h3>From all users</h3>
              <a href="#">All random products</a>
            </div>

            <div className={styles["random-products__items"]}>
              {_.map(this.state.randomProducts, (productItem) => (
                <ProductItem key={_.uniqueId()} productItem={productItem}>
                
                  <div className={styles["favorite-products__item-floor-row"]}>
                    <p><strong>{productItem.title}</strong></p>
                  </div>

                  <div className={styles["random-products__item-floor-row"]}>
                    <p>{productItem.year}</p>
                    <p>{productItem.sales}</p>
                  </div>
                </ProductItem>
              ))
              }
            </div>
          </div>

          <div className={styles["forum-topics"]}>
            <div className={styles["forum-topics__head"]}>
              <h2>Popular on forum</h2>
              <a href="#">All forum topics</a>
            </div>

            <div className={styles["forum-topics__items"]}>
              {_.map(this.state.forumTopics, (forumTopicItem) => (
                  <ForumTopicItem key={_.uniqueId()} forumTopicItem={forumTopicItem} />
                ))
              }
            </div>      
          </div>    

          <ActiveUsers />
          <SubscriptionForm />
          <WhyUs />    
        </div>

        <div className={styles['page-bottom']} />
      </div>)
    }
};

export default Home;