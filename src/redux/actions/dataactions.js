import {
  GET_POSTS,
  ADD_POST,
  LOADING_DATA,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS
} from '../types';

import axios from 'axios';
require("dotenv").config();
const API_URL = process.env.REACT_APP_API_URL;

export const getallPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(API_URL + "/posts")
    .then(response => {
      dispatch({
          type: GET_POSTS,       
          payload: response.data
        });
    })
    .catch(function(error) {
      dispatch({
          type: GET_POSTS,
          payload: []
        });
    });      
};

// Post a scream
export const addPost = (newPost) => (dispatch) => {
  console.log(newPost);
  dispatch({ type: LOADING_UI });
  axios
    .post(API_URL + "/posts/save", newPost)
    .then((res) => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
