
export const GET_ASYNC_STORAGE = "GET_ASYNC_STORAGE"
export const GET_ASYNC_STORAGE_ERROR = "GET_ASYNC_STORAGE_ERROR"
export const GET_ASYNC_STORAGE_SUCCESS = "GET_ASYNC_STORAGE_SUCCESS"

export const SET_ASYNC_STORAGE = "SET_ASYNC_STORAGE"
export const SET_ASYNC_STORAGE_ERROR = "SET_ASYNC_STORAGE_ERROR"
export const SET_ASYNC_STORAGE_SUCCESS = "SET_ASYNC_STORAGE_SUCCESS"

export const REMOVE_ASYNC_STORAGE = "REMOVE_ASYNC_STORAGE"
export const REMOVE_ASYNC_STORAGE_ERROR = "REMOVE_ASYNC_STORAGE_ERROR"
export const REMOVE_ASYNC_STORAGE_SUCCESS = "REMOVE_ASYNC_STORAGE_SUCCESS"


export function getAsyncStorage(data) {
    return {
        type: GET_ASYNC_STORAGE,
        data: data
    };
}

export function setAsyncStorage(data) {
    return {
        type: SET_ASYNC_STORAGE,
        data: data
    };
}

export function removeAsyncStorage(data) {
    return {
        type: REMOVE_ASYNC_STORAGE,
        data: data
    };
}