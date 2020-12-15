import "../shared/styles/styles.scss";
import { Component } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InsuredEventData from "../shared/utils/datasets/insuredEvents.json";
import { getInsuredEventsForPolicyHolderId } from "../shared/utils/functions/functions.js";
import history from "../shared/utils/history";

class PolicyHolderCard extends Component {
  handleClick(id) {
    let filteredInsuredEvents = getInsuredEventsForPolicyHolderId(InsuredEventData, id);
    history.push("/insuredEvents", {
      policyHolderId: id,
      insuredEvents: filteredInsuredEvents,
    });
  }

  render() {
    return (
      <Card variant="outlined" style={{ height: "98%" }}>
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={2}>
              <Typography variant="h4" align="center">
                {this.props.policyHolder.id}
              </Typography>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid container direction="column">
              <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" align="left">
                    Policy Holder Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container direction="column">
                    <Typography variant="subtitle1" align="left">
                      Gender: {this.props.policyHolder.gender}
                    </Typography>
                    <Typography variant="subtitle1" align="left">
                      Date of Birth: {this.props.policyHolder.dob}
                    </Typography>
                    <Typography variant="subtitle1" align="left">
                      SSN: {this.props.policyHolder.ssn}
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Accordion elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" align="left">
                  Health Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column">
                  <Typography variant="subtitle1" align="left">
                    {this.props.policyHolder.smokingStatus
                      ? "Smoking"
                      : "Non-Smoking"}
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    Allergies: {this.props.policyHolder.allergies}
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    Medical Conditions:{" "}
                    {this.props.policyHolder.medicalConditions}
                  </Typography>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Button onClick={() => this.handleClick(this.props.policyHolder.id)}>
            See Insured Events
          </Button>
        </Grid>
      </Card>
    );
  }
}

export default PolicyHolderCard;
