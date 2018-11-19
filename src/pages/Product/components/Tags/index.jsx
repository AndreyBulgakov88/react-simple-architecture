import React, { Component } from 'react';
import TagItem from 'Product/components/TagItem';

class Tags extends Component {

  render() {
    return (
      <div> 
        <p>Tags:</p>
        {_.map(this.props.tags, (tag) => (
            <TagItem key={_.uniqueId()} tag={tag}/>
          ))
        }
      </div>)
    }
};

export default Tags;