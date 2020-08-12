import {
    GET_MAINTENANCE_FORM, GET_MAINTENANCE_FORM_ERROR, GET_MAINTENANCE_FORM_SUCCESS,
    DELETE_MAINTENANCE_FORM, DELETE_MAINTENANCE_FORM_ERROR, DELETE_MAINTENANCE_FORM_SUCCESS
  } from '../action/maintenanceForm';
  
  
  const data = {status: false, message: 'default'}

  export function getMaintenanceForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case GET_MAINTENANCE_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case GET_MAINTENANCE_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case GET_MAINTENANCE_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }

  export function deleteMaintenanceForm(state ={ data : data, loading: false} , action) {
    switch (action.type) {
      case DELETE_MAINTENANCE_FORM:
        return {
            ...state,
            data : null,
            loading: true,
            error: null
        };
      case DELETE_MAINTENANCE_FORM_SUCCESS:
        return {
          data: action.data,
          loading: false,
          error: null
        };
      case DELETE_MAINTENANCE_FORM_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }