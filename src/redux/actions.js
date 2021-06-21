import { database } from "../database/config";

export function startAddingPost(post) {
  return async function (dispatch) {
    const res = await database.ref("posts").update({ [post.post_id]: post });
    dispatch({
      type: "ADD_POST",
      post: post,
      payload: post
    });
  };
}

export function startLoadingPost() {
  return async function (dispatch) {
    let posts = [];
    const res = await database.ref("posts").once("value");
    res.forEach((childSnapshot) => {
      posts.push(childSnapshot.val());
    });
    console.log("Loaded Posts:", posts);
    dispatch(loadPosts(posts));
  };
}

export function startRemovingPost(id) {
  return async function (dispatch) {
    const res = await database.ref(`posts/${id}`).remove();
    dispatch(removePost(id));
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post: post
  };
}

export function addComment(comment, post_id) {
  return {
    type: "ADD_COMMENT",
    comment: comment,
    post_id: post_id
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts: posts
  };
}
