import "../shared/styles/styles.scss";
import { Component } from "react";
import InsuredEventCard from "../features/InsuredEventCard";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import InsuredEventData from "../shared/utils/datasets/insuredEvents.json";
import history from "../shared/utils/history";

class InsuredEvents extends Component {
  componentDidMount() {
    // TODO get policy holder data
  }

  render() {
    return (
      <Grid container direction="column" spacing={3} style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="h4">Insured Events</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="flex-end">
            <Button variant="contained" color="primary" onClick={() => history.push("/insuredevents/add")}>
              Add Insured Event
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <GridList cellHeight={450} spacing={10} cols={3}>
            {InsuredEventData.map((insuredEvent) => (
              <GridListTile key={insuredEvent.id}>
                <InsuredEventCard insuredEvent={insuredEvent} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    );
  }
}

export default InsuredEvents;
