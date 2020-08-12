import {
    GET_ASYNC_STORAGE, GET_ASYNC_STORAGE_ERROR, GET_ASYNC_STORAGE_SUCCESS,    
    SET_ASYNC_STORAGE, SET_ASYNC_STORAGE_ERROR, SET_ASYNC_STORAGE_SUCCESS,    
    REMOVE_ASYNC_STORAGE, REMOVE_ASYNC_STORAGE_ERROR, REMOVE_ASYNC_STORAGE_SUCCESS,    
  } from '../action/asyncStorage';
export function getAsyncStorage(state ={ data : null, loading: false} , action) {
    switch (action.type) {
      case GET_ASYNC_STORAGE:
        return {
          data : null,
          loading: true,
          error: null
        };
      case GET_ASYNC_STORAGE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_ASYNC_STORAGE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
export function setAsyncStorage(state ={ data : null, loading: false} , action) {
    switch (action.type) {
      case SET_ASYNC_STORAGE:
        return {
          data : null,
          loading: true,
          error: null
        };
      case SET_ASYNC_STORAGE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case SET_ASYNC_STORAGE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

export function removeAsyncStorage(state ={ data : null, loading: false} , action) {
    switch (action.type) {
      case REMOVE_ASYNC_STORAGE:
        return {
          data : null,
          loading: true,
          error: null
        };
      case REMOVE_ASYNC_STORAGE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case REMOVE_ASYNC_STORAGE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }