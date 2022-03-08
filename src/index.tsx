import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./state";

ReactDOM.render(
  <Provider store={store}>
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
