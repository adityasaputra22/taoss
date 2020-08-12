export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const POST_USER = "POST_USER";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_ERROR = "POST_USER_ERROR";

export function getUser(data) {
    return {
        type: GET_USER,
        data: data
    }
}

export function postUser(data) {
    return {
        type: POST_USER,
        data: data
    };
}