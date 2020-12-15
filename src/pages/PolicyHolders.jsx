import "../shared/styles/styles.scss";
import { Component } from "react";
import PolicyHolderCard from "../features/PolicyHolderCard";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import PolicyHolderData from "../shared/utils/datasets/policyHolders.json";
import history from "../shared/utils/history";

class PolicyHolders extends Component {
  componentDidMount() {
    // TODO get policy holder data
  }

  render() {
    return (
      <Grid container direction="column" spacing={3} style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="h4">Policy Holders</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="flex-end">
            <Button variant="contained" color="primary" onClick={() => history.push("/policyholders/add")}>
              Add Policy Holder
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <GridList cellHeight={450} spacing={10} cols={3}>
            {PolicyHolderData.map((policyHolder) => (
              <GridListTile key={policyHolder.id}>
                <PolicyHolderCard policyHolder={policyHolder} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    );
  }
}

export default PolicyHolders;
