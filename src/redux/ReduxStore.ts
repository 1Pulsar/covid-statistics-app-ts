import {applyMiddleware, combineReducers, createStore} from "redux";
import {summaryPageReducer} from "./reducers/summaryPageReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    summaryPage: summaryPageReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));