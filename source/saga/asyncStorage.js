import {put, takeLatest} from 'redux-saga/effects';
import {
    GET_ASYNC_STORAGE, GET_ASYNC_STORAGE_ERROR, GET_ASYNC_STORAGE_SUCCESS,    
    SET_ASYNC_STORAGE, SET_ASYNC_STORAGE_ERROR, SET_ASYNC_STORAGE_SUCCESS,    
    REMOVE_ASYNC_STORAGE, REMOVE_ASYNC_STORAGE_ERROR, REMOVE_ASYNC_STORAGE_SUCCESS,    
} from '../action/asyncStorage';
import { AsyncStorage } from 'react-native';

export function* getAsyncStorage(action){
    try {
        let data = yield AsyncStorage.getItem(action.data);
        console.log('data ASYNC_STORAGEhhhh', data)
        yield put({
            type: GET_ASYNC_STORAGE_SUCCESS,
            data: JSON.parse(data)
        });
    } catch (error) {
        yield put({
            type: GET_ASYNC_STORAGE_ERROR,
            error: error
        });
    }
  };
export function* setAsyncStorage(action){
    try {
        let data = yield AsyncStorage.setItem(action.data.key, JSON.stringify(action.data.value));
        console.log('saga setAsyncccc', data);
        yield put({
            type: SET_ASYNC_STORAGE_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SET_ASYNC_STORAGE_ERROR,
            error: error
        });
    }
  };
export function* removeAsyncStorage(action){
    try {
        let data = yield AsyncStorage.removeItem(action.data);
        yield put({
            type: REMOVE_ASYNC_STORAGE_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: REMOVE_ASYNC_STORAGE_ERROR,
            error: error
        });
    }
  };

export function* watchGetAsyncStorage() {
    yield takeLatest(GET_ASYNC_STORAGE, getAsyncStorage)
}

export function* watchSetAsyncStorage() {
    yield takeLatest(SET_ASYNC_STORAGE, setAsyncStorage)
}

export function* watchRemoveAsyncStorage() {
    yield takeLatest(REMOVE_ASYNC_STORAGE, removeAsyncStorage)
}