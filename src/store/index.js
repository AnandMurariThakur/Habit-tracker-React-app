import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "../reducer";

// Custom middleware that logs dispatched actions
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("dispatching", action);
    }
    next(action);
  };

// Create the Redux store with the AppReducer and apply middleware
export const store = createStore(AppReducer, applyMiddleware(logger, thunk));
