import {
    GET_USER, GET_USER_ERROR, GET_USER_SUCCESS,
    POST_USER,POST_USER_ERROR,POST_USER_SUCCESS
  } from '../action/user';
import { AsyncStorage } from 'react-native';
  
  export function getUser(state ={ data : null, loading: false} , action) {
    console.log(action);
    switch (action.type) {
      case GET_USER:
        return {
          data : null,
          loading: true,
          error: null
        };
      case GET_USER_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_USER_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function postUser(state ={ data : null, loading: false} , action) {
    switch (action.type) {
      case POST_USER:
        return {
          data : null,
          loading: true,
          error: null
        };
      case POST_USER_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case POST_USER_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }