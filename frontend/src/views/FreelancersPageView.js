/*
 * This view will show freelancers page
 */

// Imports
import React from "react";
import FreelancerGridView from "./FreelancerGridView";
import FreelancerSpecificationView from "./FreelancerSpecificationView";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./FreelancersPageView.css";
import Page from "../components/Page";

export class FreelancersPageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      specs: {
        badge: "",
        expertise: "",
        problemArea: ""
      }
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
          <FreelancerSpecificationView values={this.state.specs}/>
          <FreelancerGridView />
        </div>
      </Page>
    );
  }
}

// export default FreelancersPageView;
