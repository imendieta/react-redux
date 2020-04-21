import { combineReducers } from "redux";
import { CoreStateImp } from "../models";
import createReducer from "redux-action-reducer";

const test = createReducer<string>()('');

export const reducer = combineReducers<CoreStateImp>({
    test
});

