import "../shared/styles/styles.scss";
import { Component } from "react";
import { Typography } from "@material-ui/core";
import { getTotalCoveredAmount, getNumberOfClaimsByYear, getAverageAgeOfPolicyHolders } from "../shared/utils/functions.js";
import InsuredEventData from "../shared/utils/datasets/insuredEvents.json";
import policyHolders from "../shared/utils/datasets/policyHolders.json";

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCoveredAmount: 0, insuredEvents: [], totalNumberOfClaimsByYear: 0, analysisYear: "2020", averageAgeOfPolicyHolders: 0 }
  }

  componentDidMount() {
    this.setState({ totalCoveredAmount: getTotalCoveredAmount(InsuredEventData)});
    this.setState({ totalNumberOfClaimsByYear: getNumberOfClaimsByYear(InsuredEventData, this.state.analysisYear)});
    this.setState({ averageAgeOfPolicyHolders: getAverageAgeOfPolicyHolders(policyHolders) })
  }

  render() {
    return (
      <div className="app">
        <Typography>Analytics</Typography>
        <Typography>Total Covered Amount: {moneyFormatter.format(this.state.totalCoveredAmount)}</Typography>
        <Typography>Number of Claims in 2020: {this.state.totalNumberOfClaimsByYear}</Typography>
        <Typography>Average Age of Policy Holders: {this.state.averageAgeOfPolicyHolders}</Typography>
      </div>
    );
  }
}

export default Analysis;
