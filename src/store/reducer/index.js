import LoginReducerState from "./loginReducer/loginReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    LoginReducerState
})

export default rootReducer;