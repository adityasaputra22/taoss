import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from "./auth.reducer";
import { getUser, postUser } from './user';
import {getProfile, editProfile, editPassword} from './profile';
import { getAsyncStorage, setAsyncStorage, removeAsyncStorage } from './asyncStorage';
import {getConfigForm, editConfigForm, addConfigForm, deleteConfigForm} from './configForm';
import {getMaintenanceForm, deleteMaintenanceForm} from './maintenanceForm';
import { getDownlink, getUplink, getModem, getHeadline } from './dashboard';

const reducers = {
    getAsyncStorage,
    setAsyncStorage,
    removeAsyncStorage,
    user: getUser,
    postUser,
    profile: getProfile,
    editProfile,
    editPassword,
    configForm: getConfigForm,
    editConfigForm,
    addConfigForm,
    deleteConfigForm,
    maintenanceForm: getMaintenanceForm,
    deleteMaintenanceForm,
    downlink: getDownlink,
    uplink: getUplink,
    modem: getModem,
    headline: getHeadline
    // authReducer,
    // form: formReducer
};

export default combineReducers(reducers);