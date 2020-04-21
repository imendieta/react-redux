import { combineReducers, Reducer } from "redux";

import { reducer as core } from '../model/core/reducers';
import { IAppState } from "../state";

export const reducers:Reducer<IAppState> = combineReducers<IAppState>({
    core
});