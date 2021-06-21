import React, { Component } from 'react';

class ContentContainer extends Component {
  render() {
    const post_desc = this.props.desc;
    const post_id = this.props._id;
    return (
      <div className="content_container">
        <div className="content_desc">{this.props.desc}</div>
        <button
          onClick={() => {
            this.props.onRemove(post_id);
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default ContentContainer;
