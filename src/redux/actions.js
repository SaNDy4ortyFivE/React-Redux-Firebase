import { database } from '../database/config';

export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  };
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post: post
  };
}

export function addComment(comment, post_id) {
  return {
    type: 'ADD_COMMENT',
    comment: comment,
    post_id: post_id
  };
}
