import "../shared/styles/styles.scss";
import { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import history from "../shared/utils/history";

class NavigationTabs extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Button onClick={() => history.push("/policyholders")}>Manage Policy Holders</Button>
        <Button onClick={() => history.push("/insuredevents")}>Manage Insured Events</Button>
        <Button onClick={() => history.push("/analysis")}>Analyze Existing Data</Button>
      </Grid>
    );
  }
}

export default NavigationTabs;
