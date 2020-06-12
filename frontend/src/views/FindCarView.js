/*
 * This view will show find a car  page
 */

// Imports
import React from "react";
import FindCarGridView from "./FindCarGridView";
import FindCarSpecificationView from "./FindCarSpecificationView";
import styles from "./FreelancersPageView.css";
import Page from "../components/Page";

export class FindCarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
  }
  render() {
    return (
      <Page>
        <div className={styles.container}>
          <FindCarSpecificationView />
          <FindCarGridView />
        </div>
      </Page>
    );
  }
}
