import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_USER, GET_USER_ERROR, GET_USER_SUCCESS,
    POST_USER, POST_USER_ERROR, POST_USER_SUCCESS    
} from '../action/user';
import {filteredFetch} from '../utils/apiUtils';
import API_config from '../config/API_config';
import convertJSONToForm from '../utils/convertJSONToForm';


export function* getUser(action) {
    try {
        let data = yield filteredFetch({
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/auth/login`,
            data: convertJSONToForm(action.data)
        }
        );
        yield put({
            type: GET_USER_SUCCESS,  
            data: data
        });
    } catch (error) {
        yield put({
            type: GET_USER_ERROR,
            error: error
        });
    }
}

export function* postUser(action) {
    try {
        let data = yield filteredFetch({
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/auth/signup`,
            data: convertJSONToForm(action.data)
        }
        );

        yield put({
            type: POST_USER_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: POST_USER_ERROR,
            error: error
        });
    }
}

export function* watchGetUser() {
    yield takeLatest(GET_USER, getUser)
}
export function* watchPostUser() {
    yield takeLatest(POST_USER, postUser)
}
