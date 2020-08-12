import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS,
    EDIT_PROFILE, EDIT_PROFILE_ERROR, EDIT_PROFILE_SUCCESS,
    EDIT_PASSWORD, EDIT_PASSWORD_ERROR, EDIT_PASSWORD_SUCCESS    
} from '../action/profile';
import {filteredFetch} from '../utils/apiUtils';
import API_config from '../config/API_config';
import convertJSONToForm from '../utils/convertJSONToForm';


export function* getProfile(action) {
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/user`,
            params: action.data,
            data: JSON.stringify(action.data)
        }
        );
        yield put({
            type: GET_PROFILE_SUCCESS,  
            data: data
        });
    } catch (error) {
        yield put({
            type: GET_PROFILE_ERROR,
            error: error
        });
    }
}

export function* editProfile(action) {
    try {
        let data = yield filteredFetch({
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/user/edit`,
            data: convertJSONToForm(action.data)
        }
        );

        yield put({
            type: EDIT_PROFILE_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: EDIT_PROFILE_ERROR,
            error: error
        });
    }
}

export function* editPassword(action) {
    try {
        let data = yield filteredFetch({
            method: 'put',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/user/password`,
            data: action.data
        }
        );

        yield put({
            type: EDIT_PASSWORD_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: EDIT_PASSWORD_ERROR,
            error: error
        });
    }
}

export function* watchGetProfile() {
    yield takeLatest(GET_PROFILE, getProfile)
}
export function* watchEditProfile() {
    yield takeLatest(EDIT_PROFILE, editProfile)
}

export function* watchEditPassword() {
    yield takeLatest(EDIT_PASSWORD, editPassword)
}
