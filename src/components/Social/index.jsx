import React, { Component } from 'react';
import SocialItem from './components/SocialItem';


class Social extends Component {
  render() {
    return (
      <div className={this.props.className}> 
        {_.map(this.props.socialItems, (socialItem) => (
            <SocialItem key={_.uniqueId()} className={socialItem.className} text={socialItem.text}/>
          ))
        }
      </div>)
    }
};

export default Social;