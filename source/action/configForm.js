export const GET_CONFIG_FORM = "GET_CONFIG_FORM";
export const GET_CONFIG_FORM_SUCCESS = "GET_CONFIG_FORM_SUCCESS";
export const GET_CONFIG_FORM_ERROR = "GET_CONFIG_FORM_ERROR";

export const EDIT_CONFIG_FORM = "EDIT_CONFIG_FORM";
export const EDIT_CONFIG_FORM_SUCCESS = "EDIT_CONFIG_FORM_SUCCESS";
export const EDIT_CONFIG_FORM_ERROR = "EDIT_CONFIG_FORM_ERROR";

export const ADD_CONFIG_FORM = "ADD_CONFIG_FORM";
export const ADD_CONFIG_FORM_SUCCESS = "ADD_CONFIG_FORM_SUCCESS";
export const ADD_CONFIG_FORM_ERROR = "ADD_CONFIG_FORM_ERROR";

export const DELETE_CONFIG_FORM = "DELETE_CONFIG_FORM";
export const DELETE_CONFIG_FORM_SUCCESS = "DELETE_CONFIG_FORM_SUCCESS";
export const DELETE_CONFIG_FORM_ERROR = "DELETE_CONFIG_FORM_ERROR";

export function getConfigForm(data) {
    return {
        type: GET_CONFIG_FORM,
        data: data
    }
}

export function editConfigForm(data) {
    return {
        type: EDIT_CONFIG_FORM,
        data: data
    };
}

export function addConfigForm(data) {
    return {
        type: ADD_CONFIG_FORM,
        data: data
    };
}

export function deleteConfigForm(data) {
    return {
        type: DELETE_CONFIG_FORM,
        data: data
    };
}