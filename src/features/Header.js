import logo from "../shared/logo.png";
import "../shared/styles/styles.scss";
import { Component } from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid container direction="row">
            <Grid item>
              <img src={logo} className="App-logo" alt="logo" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
