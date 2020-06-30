import React, { Component } from "react";
import AskQuestionForm from "./AskQuestionForm";
import Page from "../components/Page";
import styles from "./CommunityView.css";

export class CommunityView extends Component {
  render() {
    return (
      <Page>
        <div className={styles.container}>
          <div className={styles.first}>
            {" "}
            <AskQuestionForm title={"Ask a Question"} />
          </div>
        </div>
      </Page>
    );
  }
}
