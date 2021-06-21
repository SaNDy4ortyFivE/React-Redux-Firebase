import React, { Component } from "react";
import { isPlainObject } from "is-plain-object";

import Title from "./Title";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(event) {
    event.preventDefault();
    const img_link = event.target.elements.img_link.value;
    const img_desc = event.target.elements.img_desc.value;

    const post = {
      post_id: Number(new Date()),
      post_desc: img_desc,
      post_img: img_link
    };

    console.log("Is plain Object:", isPlainObject(post));

    if (img_link && img_desc) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/");
    }
  }

  render() {
    //console.log('props to addphoto', this.props)
    return (
      <>
        <div>
          <Title />
        </div>
        <div className="add_photo_container">
          <form onSubmit={this.handlesubmit}>
            <input
              type="text"
              name="img_link"
              placeholder="Enter Image Url here"
            />
            <input
              type="text"
              name="img_desc"
              placeholder="Enter Image Description"
            />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddPhoto;
