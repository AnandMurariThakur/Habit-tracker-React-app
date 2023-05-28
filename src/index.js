import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

// Create a root element to mount the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React application
root.render(
  // Enable React strict mode to perform additional checks
  <React.StrictMode>
    {/* Provide the Redux store to the application */}
    <Provider store={store}>
      {/* Render the main component of the application */}
      <App />
    </Provider>
  </React.StrictMode>
);
