import { combineReducers } from "redux";
import { tokenReducer } from "./redux/TokenReducer";

export const rootReduser =  combineReducers({
    token: tokenReducer,
})