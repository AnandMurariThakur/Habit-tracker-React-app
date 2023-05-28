import { combineReducers } from "redux";
import habitReducer from "./habit";

// Combine multiple reducers using combineReducers
const AppReducer = combineReducers({
  habitReducer, // Add other reducers here if needed
});

export default AppReducer;
