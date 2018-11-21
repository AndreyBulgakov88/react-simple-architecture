import React, { Component } from 'react';
import styles from './styles.scss';
import 'styles/base.scss';
import Button from 'sharedComponents/Button';

class ForumTopicItem extends Component {

  render() {
    return (
      <div className={styles['item']}>
        <a className={styles['item__title']} href="#">{this.props.forumTopicItem.title}</a>
        <p>{this.props.forumTopicItem.description}</p>
        <div className={styles['floor']}>
          <img className={styles['floor__avatar']} src="#" />
          <div className={styles['author-name-role']}>
            <p className={styles['author-name-role__name']}><strong>{this.props.forumTopicItem.author.name}</strong></p>
            <p className={styles['author-name-role__role']}>{this.props.forumTopicItem.author.role}</p> 
          </div>
          <Button className={styles['floor__button-new-message']} caption="New message"/>
          <p>{this.props.forumTopicItem.messages}</p>
        </div>
        <hr />
      </div>)
    }
};

export default ForumTopicItem;