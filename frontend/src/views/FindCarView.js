/*
 * This view will show find a car  page
 */

// Imports
import React from "react";
import FindCarGridView from "./FindCarGridView";
import FindCarSpecificationView from "./FindCarSpecificationView";
import styles from "./FreelancersPageView.css";
import Page from "../components/Page";
import CarService from "../services/CarService";

export class FindCarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      cars: []
    };
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    CarService.getCars()
      .then((cars) => {
        this.setState({
          cars: [...cars],
          loading: false,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  render() {
    if (this.state.loading == true) {
      return <h2>Loading Cars...</h2>;
    }
    return (
      <Page>
        {}
        <div className={styles.container}>
          <FindCarSpecificationView />
          {console.log("before", this.state.cars)}
          <FindCarGridView cars={this.state.cars}/>
        </div>
      </Page>
    );
  }
}
