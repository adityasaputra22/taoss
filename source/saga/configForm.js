import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_CONFIG_FORM, GET_CONFIG_FORM_ERROR, GET_CONFIG_FORM_SUCCESS,
    EDIT_CONFIG_FORM,EDIT_CONFIG_FORM_ERROR,EDIT_CONFIG_FORM_SUCCESS ,
    ADD_CONFIG_FORM, ADD_CONFIG_FORM_ERROR, ADD_CONFIG_FORM_SUCCESS   ,
    DELETE_CONFIG_FORM, DELETE_CONFIG_FORM_ERROR, DELETE_CONFIG_FORM_SUCCESS
} from '../action/configForm';
import {filteredFetch} from '../utils/apiUtils';
import API_config from '../config/API_config';
import convertJSONToForm from '../utils/convertJSONToForm';


export function* getConfigForm(action) {
    console.log(action)
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/form`,
            params: action.data,
            data: JSON.stringify(action.data)
        }
        );
        yield put({
            type: GET_CONFIG_FORM_SUCCESS,  
            data: data
        });
    } catch (error) {
        yield put({
            type: GET_CONFIG_FORM_ERROR,
            error: error
        });
    }
}

export function* editConfigForm(action) {
    try {
        let data = yield filteredFetch({
            method: 'put',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/form`,
            data: JSON.stringify(action.data)
        }
        );

        yield put({
            type: EDIT_CONFIG_FORM_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: EDIT_CONFIG_FORM_ERROR,
            error: error
        });
    }
}

export function* addConfigForm(action) {
    try {
        let data = yield filteredFetch({
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/form`,
            data: convertJSONToForm(action.data)
        }
        );

        yield put({
            type: ADD_CONFIG_FORM_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: ADD_CONFIG_FORM_ERROR,
            error: error
        });
    }
}

export function* deleteConfigForm(action) {
    try {
        const deletedData = Object.entries(action.data)
            .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
            .join('&');

        let data = yield filteredFetch({
            method: 'delete',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            url: `${API_config.url}/api/form`,
            data: deletedData
        }
        );

        yield put({
            type: DELETE_CONFIG_FORM_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: DELETE_CONFIG_FORM_ERROR,
            error: error
        });
    }
}

export function* watchGetConfigForm() {
    yield takeLatest(GET_CONFIG_FORM, getConfigForm)
}
export function* watchEditConfigForm() {
    yield takeLatest(EDIT_CONFIG_FORM, editConfigForm)
}
export function* watchAddConfigForm() {
    yield takeLatest(ADD_CONFIG_FORM, addConfigForm)
}
export function* watchDeleteConfigForm() {
    yield takeLatest(DELETE_CONFIG_FORM, deleteConfigForm)
}