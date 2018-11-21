import React, { Component } from 'react';
import styles from './styles.scss';
import _ from 'lodash';
import ActiveUserItem from 'Home/components/ActiveUserItem';

class ActiveUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUsers: [
        {name: 'Sarah', role: 'Engineer'},
        {name: 'John', role: 'Engineer'},
        {name: 'Jack', role: 'Manager'},
        {name: 'Johnatan', role: 'Seller'},
        {name: 'Mark', role: 'Manager'},
        {name: 'Donald', role: 'Director'}                
      ]
    }
  }

  render() {
    return (
      <div className={styles['active-users']}> 
        <div className={styles['active-users__head']}>
          <h2>Active users</h2>
          <a href="#">Show all</a>
        </div>
        <div className={styles['active-users__items']}>
          {_.map(this.state.activeUsers, (activeUserItem) => (
              <ActiveUserItem key={_.uniqueId()} activeUserItem={activeUserItem}/>
            ))
          }
        </div>
      </div>)
    }
};

export default ActiveUsers;