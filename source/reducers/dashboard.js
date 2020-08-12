import {
    GET_DOWNLINK, GET_DOWNLINK_ERROR, GET_DOWNLINK_SUCCESS,
    GET_UPLINK,GET_UPLINK_ERROR,GET_UPLINK_SUCCESS,
    GET_MODEM, GET_MODEM_ERROR, GET_MODEM_SUCCESS,
    GET_HEADLINE, GET_HEADLINE_ERROR, GET_HEADLINE_SUCCESS
  } from '../action/dashboard';
  
  
  const data = {status: false, message: 'default'}

  export function getDownlink(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_DOWNLINK:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_DOWNLINK_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_DOWNLINK_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function getUplink(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_UPLINK:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_UPLINK_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_UPLINK_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export function getModem(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_MODEM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_MODEM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_MODEM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function getHeadline(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_HEADLINE:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_HEADLINE_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_HEADLINE_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }