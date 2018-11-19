import React, { Component } from 'react';
import PhotoPreview from 'Product/components/PhotoPreview';
import styles from './styles.scss';
import _ from 'lodash';
import Social from 'Product/components/Social';

class PhotosAndDescription extends Component {

  render() {
    return (
      <div className={styles['photos-overall']}>
        <div className={styles['photo-previews']}>
          {_.map(this.props.photoItems, (photoItem) => (
              <PhotoPreview key={_.uniqueId()} href={photoItem.href}/>
            ))
          }
        </div>
        <div className={styles['active-photo-column']}>
          <img className={styles['active-photo-column__photo']} src="#"/>
          <p className={styles['active-photo-column__description']}>
            A placeholder product is a temporary product 
            created as a preversion of a product 
            that does not exist in the leading master data system,
            but is required for planning purposes.
          </p>
          <hr />
          <Social />
        </div>
      </div>)
    }
};

export default PhotosAndDescription;