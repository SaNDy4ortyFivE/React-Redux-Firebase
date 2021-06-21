import { database } from "../database/config";

export function startAddingPost(post) {
  console.log("inside function startAddingPost");
  return async function (dispatch) {
    console.log("starting response");
    const res = await database.ref("posts").update({ [post.post_id]: post });
    dispatch({
      type: "ADD_POST",
      post: post,
      payload: post
    });
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
