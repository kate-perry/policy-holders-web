import "../shared/styles/styles.scss";
import { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class About extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h3">
            Welcome to the Policy Holder Management System!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Use the buttons to the left to navigate the app. Manage Policy Holders and Insured Events, plus view KPIs in the Analytics page.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default About;
