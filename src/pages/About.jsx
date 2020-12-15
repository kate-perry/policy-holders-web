import "../shared/styles/styles.scss";
import { Component } from "react";
import Header from "../features/Header";
import { Grid, Typography } from "@material-ui/core";

class About extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h4">
            Welcome to the Policy Holder Management System!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Use the tabs to the left to navigate the app.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default About;
