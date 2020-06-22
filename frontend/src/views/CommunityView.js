import React, { Component } from "react";
import { SimpleSelect } from "./SellCarForm";
import { TextFillForm } from "./AskQuestionForm"
import Page from "../components/Page";

export class CommunityView extends Component {
  render() {
    return (
      <Page>
        <TextFillForm title={"Ask a Question"} />
      </Page>
    );
  }
}

// export default CommunityView;
