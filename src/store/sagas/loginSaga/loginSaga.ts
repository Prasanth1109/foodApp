import { message } from "antd";
import { call, put } from "redux-saga/effects";
import AppConstants from "../../../components/LoginModule/AppConstants";
import { loginAxios } from "../../http/loginHttp/loginAxios";
import { createOrUpdateUserQuery, GetUserQuery } from "./loginGraphQlQueries";


function* failSaga(result: any) {
    yield put({ type: AppConstants.API_LOGIN_FAIL });
    let msg = result.result.data
        ? result.result.data.message
        : AppConstants.somethingwentwrong;
    message.config({
        duration: 1.5,
        maxCount: 1,
    });
    message.error(msg);
}

function* errorSaga(error: any) {
    yield put({
        type: AppConstants.API_LOGIN_ERROR,
        error: error,
        status: error.status,
    });
    message.config({
        duration: 1.5,
        maxCount: 1,
    });
    message.error(AppConstants.somethingwentwrong);
}

export function* getUserSaga(action: any): any {
    try {
        let result = yield call(loginAxios.getUserAxios, GetUserQuery(action.payload))
        if (result.status == 1) {
            yield put({
                type: AppConstants.GET_USER_SUCCESS,
                result: result.result.data.data,
                status: result.status,
                payload: action.payload
            });
        } else {
            yield call(failSaga, result);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}

export function* createOrUpdateUserSaga(action: any): any {

    try {
        let result = yield call(loginAxios.createOrUpdateUserAxios, createOrUpdateUserQuery(action.payload))
        if (result.status == 1) {
            console.log("success");
            
            yield put({
                type: AppConstants.CREATE_OR_EDIT_USER_SUCCESS,
                result: result.result.data.data,
                status: result.status,
            });
        } else {
            yield call(failSaga, result);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}