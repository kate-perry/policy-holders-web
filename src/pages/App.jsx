import "../shared/styles/styles.scss";
import { Component } from "react";
import Header from "../features/Header";
import NavigationTabs from "../features/NavigationTabs";
import Routes from "./Routes";
import { Grid } from "@material-ui/core";
//import { createPolicyHolder } from "../shared/utils/axios-service.js";
//import PolicyHolderData from "../shared/utils/datasets/newPolicyHolders.json";
import { getInsuredEventsForPolicyHolderId } from "../shared/utils/functions/functions.js";
import InsuredEventData from "../shared/utils/datasets/insuredEvents.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { policyHolders: [], insuredEvents: [], }
  }
  componentDidMount() {
    // createPolicyHolder(PolicyHolderData).then((res) => {
    //   console.log(res);
    // })
    console.log(getInsuredEventsForPolicyHolderId(InsuredEventData, 27))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Grid container direction="row">
          <Grid item xs={2}>
            <NavigationTabs />
          </Grid>
          <Grid item xs={10}>
            <Routes />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
