import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

import Title from "./Title";
import AddPhoto from "./AddPhoto";
import PhotoContainer from "./PhotoContainer";
import Single from "./Single";
//import { removePost } from './redux/actions';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <div>
                <Title />
              </div>
              <div>
                <Link className="add_photo" to="/AddPhoto" />
              </div>
              <div>
                {this.props.posts
                  .sort(function (x, y) {
                    return y.post_id - x.post_id;
                  })
                  .map((post, key) => (
                    <PhotoContainer
                      posts={post}
                      key={key}
                      onRemove={this.props.removePost}
                    />
                  ))}
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/AddPhoto"
          render={({ history }) => (
            <>
              <div>
                <AddPhoto {...this.props} onHistory={history} />
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/single/:id"
          render={(params) => (
            <>
              <div>
                <Single {...this.props} {...params} />
              </div>
            </>
          )}
        />
      </>
    );
  }
}

export default App;
