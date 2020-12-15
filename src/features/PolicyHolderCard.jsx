import "../shared/styles/styles.scss";
import { Component } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class PolicyHolderCard extends Component {
  render() {
    return (
      <Card variant="outlined">
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={2}>
              <Typography variant="h4" align="center">
                {this.props.policyHolder.id}
              </Typography>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid container direction="column">
              <Accordion>
                <AccordionSummary>
                  {" "}
                  <Typography variant="subtitle1" align="left">
                    Policy Holder Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1" align="left">
                    Policy Holder Information
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    Gender: {this.props.policyHolder.gender}
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    Date of Birth: {this.props.policyHolder.dob}
                  </Typography>
                  <Typography variant="subtitle1">
                    SSN: {this.props.policyHolder.ssn}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Accordion>
              <AccordionSummary>
                {" "}
                <Typography variant="subtitle1" align="left">
                  Health Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1">
                  {this.props.policyHolder.smokingStatus
                    ? "Smoking"
                    : "Non-Smoking"}
                </Typography>
                <Typography variant="subtitle1">
                  Allergies: {this.props.policyHolder.allergies}
                </Typography>
                <Typography variant="subtitle1">
                  Medical Conditions:{" "}
                  {this.props.policyHolder.medicalConditions}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default PolicyHolderCard;
