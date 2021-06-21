import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    if (comment) {
      this.props.addComment(comment, this.props.post_id);
    }
  }

  render() {
    return (
      <div className="comment_section">
        {this.props.comments.map((com, ind) => {
          return <p key={ind}> {com}</p>;
        })}
        {/*console.log(this.props.comments)*/}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="comment" placeholder="Enter Comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comment;
