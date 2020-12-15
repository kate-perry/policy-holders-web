import logo from "../shared/logo.png";
import "../shared/styles/styles.scss";
import { Component } from "react";
import Header from "../features/Header";
import Routes from "./Routes";
import { Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
