import React, { Component } from 'react';
import styles from './styles.scss';
import 'src/styles/base.scss';

class PhotoPreview extends Component {

  render() {
    return (
        <img className={styles.photo} src={this.props.href} />
      )
    }
};

export default PhotoPreview;