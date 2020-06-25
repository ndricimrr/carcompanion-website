import React, { Component } from "react";
import { TextFillForm } from "./AskQuestionForm";
import Page from "../components/Page";
import { ImageUploadView } from "./ImageUploadView";
import styles from "./CommunityView.css";

export class CommunityView extends Component {
  render() {
    return (
      <Page>
        <div className={styles.container}>
          <div className={styles.first}> <TextFillForm title={"Ask a Question"} /> </div>
          <div className={styles.second}> <ImageUploadView/></div>
        </div>
      </Page>
    );
  }
}