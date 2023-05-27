import { combineReducers } from "redux";
import habitReducer from "./habbit";

const AppReducer = combineReducers({ habitReducer });
export default AppReducer;
