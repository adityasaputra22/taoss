import {
    GET_CONFIG_FORM, GET_CONFIG_FORM_ERROR, GET_CONFIG_FORM_SUCCESS,
    EDIT_CONFIG_FORM,EDIT_CONFIG_FORM_ERROR,EDIT_CONFIG_FORM_SUCCESS,
    ADD_CONFIG_FORM, ADD_CONFIG_FORM_ERROR, ADD_CONFIG_FORM_SUCCESS,
    DELETE_CONFIG_FORM, DELETE_CONFIG_FORM_ERROR, DELETE_CONFIG_FORM_SUCCESS
  } from '../action/configForm';
  
  
  const data = {status: false, message: 'default'}

  export function getConfigForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_CONFIG_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_CONFIG_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_CONFIG_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function editConfigForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case EDIT_CONFIG_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case EDIT_CONFIG_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case EDIT_CONFIG_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function addConfigForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case ADD_CONFIG_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case ADD_CONFIG_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case ADD_CONFIG_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function deleteConfigForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case DELETE_CONFIG_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case DELETE_CONFIG_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case DELETE_CONFIG_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }