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
            <Grid item xs={2}>
              <Grid container justify="left">
                <img src={logo} className="App-logo" alt="logo" />
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container justify="center" alignItems="center" style={{ height: "100%" }}>
                <Typography variant="h4" align="center">
                  Policy Holder Management System
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
