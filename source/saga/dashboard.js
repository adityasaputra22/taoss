import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_DOWNLINK, GET_DOWNLINK_ERROR, GET_DOWNLINK_SUCCESS,
    GET_UPLINK,GET_UPLINK_ERROR,GET_UPLINK_SUCCESS ,
    GET_MODEM, GET_MODEM_ERROR, GET_MODEM_SUCCESS   ,
    GET_HEADLINE, GET_HEADLINE_ERROR, GET_HEADLINE_SUCCESS
} from '../action/dashboard';
import {filteredFetch} from '../utils/apiUtils';
import API_config from '../config/API_config';

export function* getDownlink(action) {
    console.log(action)
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/data/downlink`,
            params: action.data,
            data: JSON.stringify(action.data)
        });
        yield put({
            type: GET_DOWNLINK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: GET_DOWNLINK_ERROR,
            error: error
        });
    }
}

export function* getUplink(action) {
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/data/uplink`,
            params: action.data,
            data: JSON.stringify(action.data)
        });

        yield put({
            type: GET_UPLINK_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: GET_UPLINK_ERROR,
            error: error
        });
    }
}

export function* getModem(action) {
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/data/modem`,
            params: action.data,
            data: JSON.stringify(action.data)
        });

        yield put({
            type: GET_MODEM_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: GET_MODEM_ERROR,
            error: error
        });
    }
}

export function* getHeadline(action) {
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/data/headline`,
            params: action.data,
            data: JSON.stringify(action.data)
        });

        yield put({
            type: GET_HEADLINE_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: GET_HEADLINE_ERROR,
            error: error
        });
    }
}

export function* watchGetDownlink() {
    yield takeLatest(GET_DOWNLINK, getDownlink)
}
export function* watchGetUplink() {
    yield takeLatest(GET_UPLINK, getUplink)
}
export function* watchGetModem() {
    yield takeLatest(GET_MODEM, getModem)
}
export function* watchGetHeadline() {
    yield takeLatest(GET_HEADLINE, getHeadline)
}