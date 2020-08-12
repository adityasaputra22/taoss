export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_ERROR = "EDIT_PROFILE_ERROR";

export const EDIT_PASSWORD = "EDIT_PASSWORD";
export const EDIT_PASSWORD_SUCCESS = "EDIT_PASSWORD_SUCCESS";
export const EDIT_PASSWORD_ERROR = "EDIT_PASSWORD_ERROR";

export function getProfile(data) {
    return {
        type: GET_PROFILE,
        data: data
    }
}

export function editProfile(data) {
    return {
        type: EDIT_PROFILE,
        data: data
    };
}

export function editPassword(data) {
    return {
        type: EDIT_PASSWORD,
        data: data
    };
}