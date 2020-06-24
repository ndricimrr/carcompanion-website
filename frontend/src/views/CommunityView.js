import React, { Component } from "react";
import { TextFillForm } from "./AskQuestionForm";
import Page from "../components/Page";
//import ImageUploadView from "./ImageUploadView";

//TODO: add ImageUploadView to the page
export class CommunityView extends Component {
  render() {
    return (
      <Page>
        <TextFillForm title={"Ask a Question"} />
      </Page>
    );
  }
}