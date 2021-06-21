import React, { Component } from 'react';

import ImageContainer from './ImageContainer';
import ContentContainer from './ContentContainer';

class PhotoContainer extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="photo_container">
        <ImageContainer
          img_src={this.props.posts.post_img}
          img_id={this.props.posts.post_id}
        />
        <ContentContainer
          desc={this.props.posts.post_desc}
          onRemove={this.props.onRemove}
          _id={this.props.posts.post_id}
        />
      </div>
    );
  }
}

export default PhotoContainer;
