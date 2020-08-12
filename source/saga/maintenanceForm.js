import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_MAINTENANCE_FORM, GET_MAINTENANCE_FORM_ERROR, GET_MAINTENANCE_FORM_SUCCESS,
    DELETE_MAINTENANCE_FORM, DELETE_MAINTENANCE_FORM_ERROR, DELETE_MAINTENANCE_FORM_SUCCESS
} from '../action/maintenanceForm';
import {filteredFetch} from '../utils/apiUtils';
import API_config from '../config/API_config';
import convertJSONToForm from '../utils/convertJSONToForm';


export function* getMaintenanceForm(action) {
    console.log(action)
    try {
        let data = yield filteredFetch({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${API_config.url}/api/form/maintenance`,
            params: action.data,
            data: JSON.stringify(action.data)
        }
        );
        yield put({
            type: GET_MAINTENANCE_FORM_SUCCESS,  
            data: data
        });
    } catch (error) {
        yield put({
            type: GET_MAINTENANCE_FORM_ERROR,
            error: error
        });
    }
}

export function* deleteMaintenanceForm(action) {
    try {
        const deletedData = Object.entries(action.data)
            .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
            .join('&');

        let data = yield filteredFetch({
            method: 'delete',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            url: `${API_config.url}/api/form/maintenance`,
            data: deletedData
        }
        );

        yield put({
            type: DELETE_MAINTENANCE_FORM_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: DELETE_MAINTENANCE_FORM_ERROR,
            error: error
        });
    }
}


export function* watchGetMaintenanceForm() {
    yield takeLatest(GET_MAINTENANCE_FORM, getMaintenanceForm)
}

export function* watchDeleteMaintenanceForm() {
    yield takeLatest(DELETE_MAINTENANCE_FORM, deleteMaintenanceForm)
}