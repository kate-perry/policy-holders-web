import "../shared/styles/styles.scss";
import { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import history from "../shared/utils/history";

class NavigationTabs extends Component {
  render() {
    return (
      <Grid container direction="column" spacing={2} style={{ padding: 20 }}>
        <Grid item>
          <div className="space--xl" />
        </Grid>
        <Grid item>
          <div className="space--xl" />
        </Grid>
        <Grid item>
          <Button onClick={() => history.push("/policyholders")}>
            Manage Policy Holders
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push("/insuredevents")}>
            Manage Insured Events
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push("/analysis")}>Analytics</Button>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationTabs;
