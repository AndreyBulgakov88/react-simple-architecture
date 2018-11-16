import React, { Component } from 'react';
import styles from './styles.scss';
import UserIconItem from './components/UserIconItem';
import _ from 'lodash';

class UserIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userIcons: [
        {className: 'likes'},
        {className: 'messages'},
        {className: 'notifications'},
        {className: 'avatar'}        
      ]
    }
  }

  render() {
    return (
      <div> 
        {_.map(this.state.userIcons, (userIcon) => (
            <UserIconItem key={_.uniqueId()} className={styles[userIcon.className]}/>
          ))
        }
      </div>)
    }
};

export default UserIcons;