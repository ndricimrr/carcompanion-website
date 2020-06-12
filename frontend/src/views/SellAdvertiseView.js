import React, { Component } from "react";
import { SimpleSelect } from "./SellCarForm";
import Page from "../components/Page";

export class SellAdvertiseView extends Component {
  render() {
    return (
      <Page>
        <SimpleSelect title={"Sell Your Car"} />
      </Page>
    );
  }
}

// export default CommunityView;
