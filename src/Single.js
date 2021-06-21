import React, { Component } from 'react';

import Title from './Title';
import Comment from './Comment';

class Single extends Component {
  render() {
    const post_id = Number(this.props.match.params.id);
    const post = this.props.posts.find(p => p.post_id === post_id);

    const comments = this.props.comments[post_id] || [];

    return (
      <>
        <div>
          <Title />
        </div>
        <div className="single_photo">
          <div className="single_image">
            <img src={post.post_img} alt="post.post_desc" />
          </div>
          <Comment
            addComment={this.props.addComment}
            comments={comments}
            post_id={post_id}
          />
        </div>
      </>
    );
  }
}

export default Single;
