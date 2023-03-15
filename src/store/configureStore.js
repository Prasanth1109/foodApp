import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default Store;