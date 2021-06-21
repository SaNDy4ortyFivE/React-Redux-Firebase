import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageContainer extends Component {
  render() {
    return (
      <div className="image_container">
        <Link to={`/single/${this.props.img_id}`}>
          <img src={this.props.img_src} />
        </Link>
      </div>
    );
  }
}

export default ImageContainer;
