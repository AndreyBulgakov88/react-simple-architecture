import React, { Component } from 'react';
import _ from 'lodash';
import styles from './styles.scss';
import Head from './components/Head';
import Row from './components/Row';

class Characteristics extends Component {

  render() {
    return (
      <div>
        <Head />
        {_.map(this.props.characteristics, (item) => (
            <Row key={_.uniqueId()} name={item.name} value={item.value}/>
          ))
        }
      </div>)
    }
};

export default Characteristics;