import "../shared/styles/styles.scss";
import { Component } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import history from "../shared/utils/history";

class AddPolicyHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyHolderId: "",
      doi: new Date(),
      type: "",
      billedAmount: 0,
      coveredAmount: 0,
    };
  }
  
  componentDidMount() {}

  handleAddPolicyHolderClick() {
    // TODO send insured event information
    history.push("/insuredevents");
  }

  handleStringChange(e, type) {
    if (type === "policyHolderId") {
      this.setState({ policyHolderId: e.target.value });
    } else if (type === "type") {
      this.setState({ ssn: e.target.value });
    } else if (type === "billedAmount") {
      this.setState({ billedAmount: e.target.value });
    } else if (type === "coveredAmount") {
      this.setState({ coveredAmount: e.target.value });
    }
  }

  handleDateChange(date) {
    this.setState({ dob: date });
  }

  render() {
    return (
      <Grid container direction="column" spacing={3} style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="h4">Add Insured Event</Typography>
        </Grid>
        <Grid item>
          <div className="space--m" />
        </Grid>
        <Grid container direction="row">
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Grid container direction="column" spacing={2}>
              <FormControl>
                <TextField
                  fullWidth
                  id="policyHolderId"
                  label="Associated Policy Holder Id"
                  variant="outlined"
                  value={this.state.policyHolderId} //TODO Make a prop
                  onChange={(e) => this.handleStringChange(e, "policyHolderId")}
                />
              </FormControl>
              <Grid item>
                <div className="space--s" />
              </Grid>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/DD/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date Of Incident"
                  value={this.state.dob}
                  onChange={(e) => this.handleDateChange(e)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl>
                <TextField
                  fullWidth
                  id="type"
                  label="Type"
                  variant="outlined"
                  value={this.state.allergies}
                  onChange={(e) => this.handleStringChange(e, "allergies")}
                />
              </FormControl>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl>
                <TextField
                  fullWidth
                  id="amtBilled"
                  label="Amount Billed"
                  type="number"
                  variant="outlined"
                  value={this.state.billedAmount}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  onChange={(e) => this.handleStringChange(e, "billedAmount")}
                />
              </FormControl>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl>
                <TextField
                  fullWidth
                  id="amtCovered"
                  label="Amount Covered"
                  variant="outlined"
                  value={this.state.coveredAmount}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  onChange={(e) => this.handleStringChange(e, "coveredAmount")}
                />
              </FormControl>
              <Grid item>
                <div className="space--xs" />
              </Grid>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Grid>
        <Grid item>
          <div className="space--m" />
        </Grid>
        <Grid item>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddPolicyHolderClick}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default AddPolicyHolder;
