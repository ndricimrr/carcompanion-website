import React, { Component } from "react";
import { SimpleSelect } from "./SellCarForm";
import Page from "../components/Page";
import PostCarView from "./PostCarView"

export class SellAdvertiseView extends Component {
  render() {
    return (
      <Page>
        <PostCarView title={"Sell Your Car"} />
      </Page>
    );
  }
}

// export default CommunityView;
