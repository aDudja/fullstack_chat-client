import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {regReducer} from "./regReducer";
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    search: searchReducer
})