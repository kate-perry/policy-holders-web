import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "./shared/styles/MuiTheme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={MuiTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
