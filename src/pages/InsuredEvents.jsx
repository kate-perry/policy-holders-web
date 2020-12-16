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
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      insuredEvents: [],
    };
  }

  componentDidMount() {
    if (this.props.location && this.props.location.state) {
      if (
        this.props.location.state.policyHolderId &&
        this.props.location.state.insuredEvents
      ) {
        let newTitle =
          "Insured Events for Policy Holder " +
          this.props.location.state.policyHolderId;
        this.setState({
          title: newTitle,
          insuredEvents: this.props.location.state.insuredEvents,
        });
      } else {
        this.setState({
          title: "Insured Events for All Policy Holders",
          insuredEvents: InsuredEventData,
        });
      }
    } else {
      this.setState({
        title: "Insured Events for All Policy Holders",
        insuredEvents: InsuredEventData,
      });
    }
  }

  render() {
    return (
      <Grid container direction="column" spacing={3} style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="h4">{this.state.title}</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/insuredevents/add")}
            >
              Add Insured Event
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <GridList cellHeight={450} spacing={10} cols={3}>
            {this.state.insuredEvents.map((insuredEvent) => (
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
