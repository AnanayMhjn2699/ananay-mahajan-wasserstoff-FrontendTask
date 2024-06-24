import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      {/*integrating redux store to make it accessible throughout the app */}
      <App />
    </Provider>
  </React.StrictMode>
);
