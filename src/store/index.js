import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "../reducer";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("dispatching", action);
    }
    next(action);
  };

export const store = createStore(AppReducer, applyMiddleware(logger, thunk));
