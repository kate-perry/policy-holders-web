import "../shared/styles/styles.scss";
import { Component } from "react";
import { Typography } from "@material-ui/core";
import { getTotalCoveredAmount } from "../shared/utils/functions.js";
import InsuredEventData from "../shared/utils/datasets/insuredEvents.json";

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCoveredAmount: 0, insuredEvents: [], }
  }

  componentDidMount() {
    this.setState({ totalCoveredAmount: getTotalCoveredAmount(InsuredEventData)});
  }

  render() {
    return (
      <div className="app">
        <Typography>Analytics</Typography>
        <Typography>Total Covered Amount: {moneyFormatter.format(this.state.totalCoveredAmount)}</Typography>
      </div>
    );
  }
}

export default Analysis;
