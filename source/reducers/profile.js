import {
    GET_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS,
    EDIT_PROFILE,EDIT_PROFILE_ERROR,EDIT_PROFILE_SUCCESS,
    EDIT_PASSWORD, EDIT_PASSWORD_ERROR, EDIT_PASSWORD_SUCCESS
  } from '../action/profile';
  
  const data = {status: false, message: 'default'}
  export function getProfile(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_PROFILE:
        return {
          ...state,
          data : null,
          loading: true,
          error: null
        };
      case GET_PROFILE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_PROFILE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function editProfile(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case EDIT_PROFILE:
        return {
          data : null,
          loading: true,
          error: null
        };
      case EDIT_PROFILE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case EDIT_PROFILE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function editPassword(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case EDIT_PASSWORD:
        return {
          data : null,
          loading: true,
          error: null
        };
      case EDIT_PASSWORD_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case EDIT_PASSWORD_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }