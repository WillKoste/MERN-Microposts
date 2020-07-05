import axios from 'axios';
import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  POST_ERROR
} from './types';

const url = 'http://localhost:5003/api/posts/';

export const getPosts = () => async dispatch => {

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

export const addPost = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post(url, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response}
    });
  }
}

export const deletePost = (id) => async dispatch => {
  try {
    await axios.delete(`${url}${id}`);

    dispatch({
      type: REMOVE_POST,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response}
    });
  }
}