import React, { Component } from 'react';
import styles from './styles.scss';
import SocialItem from 'Product/components/SocialItem';
import classNames from 'classnames';

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialItems: [
        {className: styles['social-facebook'], text: 'fb'},
        {className: styles['social-instagram'], text: 'ig'},
        {className: styles['social-twitter'], text: 'tw'},
        {className: styles['social-google'], text: 'go'}        
      ]
    }
  }

  render() {
    return (
      <div className={styles['social-items']}> 
        <p className={styles['social-items__text']}>Share: </p>
        {_.map(this.state.socialItems, (socialItem) => (
            <SocialItem key={_.uniqueId()} className={classNames(socialItem.className, styles['social-items__item'])} text={socialItem.text}/>
          ))
        }
        <p className={styles['social-items__shares']}>0 shares</p>
      </div>)
    }
};

export default Social;