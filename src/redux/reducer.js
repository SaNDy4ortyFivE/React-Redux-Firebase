import posts from '../data/posts';
import { combineReducers } from 'redux';

function comments(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT': {
      console.log('post:', action.post_id, ' comment:', action.comment);
      if (!state[action.post_id]) {
        return { ...state, [action.post_id]: [action.comment] };
      } else {
        return {
          ...state,
          [action.post_id]: [...state[action.post_id], action.comment]
        };
      }
    }
    default:
      return state;
  }
}

function post(state = posts, action) {
  switch (action.type) {
    case 'REMOVE_POST':
      console.log('user removed post with ID:', action.index);
      return state.filter(function(post) {
        return post.post_id !== action.index;
      });
    case 'ADD_POST':
      console.log('user added a new post:', action.post);
      return [...state, action.post];
    default:
      return state;
  }
}

const rootreducer = combineReducers({ comments, post });

export default rootreducer;
