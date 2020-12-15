import "../shared/styles/styles.scss";
import { Component } from "react";
import Header from "../features/Header";
import NavigationTabs from "../features/NavigationTabs";
import Routes from "./Routes";
import { Grid } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    // TODO post policy holder and insured events data
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Grid container direction="row">
          <Grid item xs={2}>
            <NavigationTabs/>
          </Grid>
          <Grid item xs={10}>
            <Routes/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
