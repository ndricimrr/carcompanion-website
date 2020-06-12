import React, { Component } from "react";
import { SimpleSelect } from "./SellCarForm";
import Page from "../components/Page";

export class CommunityView extends Component {
  render() {
    return (
      <Page>
        <SimpleSelect title={"Ask a Question"} />
      </Page>
    );
  }
}

// export default CommunityView;
