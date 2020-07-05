import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  POST_ERROR
} from '../actions/types';

const initialState = {
  posts: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      }
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post._id === payload.id ? {...post} : post),
        loading: true
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
}