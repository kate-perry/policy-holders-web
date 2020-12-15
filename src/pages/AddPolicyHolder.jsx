import "../shared/styles/styles.scss";
import { Component } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
      gender: "",
      dob: new Date(),
      ssn: "",
      smoking: false,
      allergies: "",
      medicalConditions: "",
    };
  }
  componentDidMount() {}

  handleAddPolicyHolderClick() {
    // TODO send policy holder information
    history.push("/policyholders");
  }

  handleStringChange(e, type) {
    if (type === "gender") {
      this.setState({ gender: e.target.value });
    } else if (type === "ssn") {
      this.setState({ ssn: e.target.value });
    } else if (type === "allergies") {
      this.setState({ allergies: e.target.value });
    } else if (type === "medicalConditions") {
      this.setState({ medicalConditions: e.target.value });
    }
  }

  handleBooleanChange(e) {
    this.setState({ smoking: e.target.checked });
  }

  handleDateChange(date) {
    this.setState({ dob: date });
  }

  render() {
    return (
      <Grid container direction="column" spacing={3} style={{ padding: 20 }}>
        <Grid item>
          <Typography variant="h4">Add Policy Holder</Typography>
        </Grid>
        <Grid item>
          <div className="space--m" />
        </Grid>
        <Grid container direction="row">
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Grid container direction="column" spacing={2}>
              <Typography align="left" variant="h6">
                Personal Information
              </Typography>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl variant="outlined">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  fullWidth
                  id="gender"
                  label="Gender"
                  variant="outlined"
                  value={this.state.gender}
                  onChange={(e) => this.handleStringChange(e, "gender")}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/DD/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date Of Birth"
                    value={this.state.dob}
                    onChange={(e) => this.handleDateChange(e)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl>
                <TextField
                  fullWidth
                  id="ssn"
                  label="SSN"
                  variant="outlined"
                  value={this.state.ssn}
                  onChange={(e) => this.handleStringChange(e, "ssn")}
                />
              </FormControl>
              <Grid item>
                <div className="space--s" />
              </Grid>
              <Typography align="left" variant="h6">
                Health Information
              </Typography>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <Grid container direction="row" alignItems="center">
                <InputLabel id="gender-label">Smoking</InputLabel>
                <Checkbox
                  id="smoking"
                  label="Smoking"
                  color="primary"
                  checked={this.state.smoking}
                  onChange={(e) => this.handleBooleanChange(e)}
                />
              </Grid>
              <Grid item>
                <div className="space--xs" />
              </Grid>
              <FormControl>
                <TextField
                  multiline
                  fullWidth
                  rows="4"
                  rowsMaz="6"
                  id="allergies"
                  label="Allergies"
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
                  multiline
                  fullWidth
                  rows="4"
                  rowsMaz="6"
                  id="medical-conditions"
                  label="Medical Conditions"
                  variant="outlined"
                  value={this.state.medicalConditions}
                  onChange={(e) =>
                    this.handleStringChange(e, "medicalConditions")
                  }
                />
              </FormControl>
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
