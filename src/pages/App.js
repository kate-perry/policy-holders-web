import logo from "../shared/logo.png";
import "../shared/styles/styles.scss";
import { Component } from "react";
import Header from "../features/Header";
import { Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography>
            Edit <code>src/App.js</code> and save to reload.
          </Typography>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
