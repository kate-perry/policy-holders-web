import "../shared/styles/styles.scss";
import { Component } from "react";
import {
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class InsuredEventCard extends Component {
  render() {
    return (
      <Card variant="outlined" style={{ height: "98%" }}>
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={2}>
              <Typography variant="h4" align="center">
                {this.props.insuredEvent.id}
              </Typography>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid container direction="column">
              <Grid container direction="column">
                <Typography variant="subtitle1" align="left">
                  Policy Holder Id: {this.props.insuredEvent.policyHolderId}
                </Typography>
                <Typography variant="subtitle1" align="left">
                  Date of Incident: {this.props.insuredEvent.doi}
                </Typography>
                <Typography variant="subtitle1" align="left">
                  Type: {this.props.insuredEvent.type}
                </Typography>
                <Typography variant="subtitle1" align="left">
                  Billed Amount: {moneyFormatter.format(this.props.insuredEvent.billedAmount)}
                </Typography>
                <Typography variant="subtitle1" align="left">
                  Covered Amount: {moneyFormatter.format(this.props.insuredEvent.coveredAmount)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default InsuredEventCard;
