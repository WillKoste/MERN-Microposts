import axios from 'axios';
import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  POST_ERROR
} from './types';

export const getPosts = () => async dispatch => {
  const url = 'http://localhost:5003/api/posts';

  try {
    const res = await axios.get(url);

    console.log(res.data);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response}
    });
  }
}

export const addPost = () => async dispatch => {
  try {
    
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response}
    });
  }
}