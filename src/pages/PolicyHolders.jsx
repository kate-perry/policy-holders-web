import "../shared/styles/styles.scss";
import { Component } from "react";
import PolicyHolderCard from "../features/PolicyHolderCard";
import { GridList, GridListTile } from "@material-ui/core";
import PolicyHolderData from "../shared/utils/datasets/policyHolders.json";

class PolicyHolders extends Component {
  componentDidMount() {}

  render() {
    return (
      <GridList cellHeight={180} cols={3}>
        {PolicyHolderData.map((policyHolder) => (
          <GridListTile key={policyHolder.id}>
            <PolicyHolderCard policyHolder={policyHolder} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default PolicyHolders;
