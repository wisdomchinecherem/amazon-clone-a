import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
