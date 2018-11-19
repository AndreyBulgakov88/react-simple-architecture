import React, { Component } from 'react';
import styles from './styles.scss';
import SocialItem from 'sharedComponents/Footer/components/SocialItem';

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
        {_.map(this.state.socialItems, (socialItem) => (
            <SocialItem key={_.uniqueId()} className={socialItem.className} text={socialItem.text}/>
          ))
        }
      </div>)
    }
};

export default Social;