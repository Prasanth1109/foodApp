import { takeEvery } from "redux-saga/effects";
import AppConstants from "../../components/LoginModule/AppConstants";
import {createOrUpdateUserSaga,getUserSaga} from "./loginSaga/loginSaga";

export default function* rootSaga(){
    yield takeEvery(AppConstants.CREATE_OR_EDIT_USER_LOAD, createOrUpdateUserSaga);
    yield takeEvery(AppConstants.GET_USER_LOAD, getUserSaga);
}