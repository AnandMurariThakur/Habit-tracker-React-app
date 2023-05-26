import { combineReducers } from "redux";
import addMovies from "../modules/addMovie";

const AppReducer = combineReducers({ addMovies });
export default AppReducer;
