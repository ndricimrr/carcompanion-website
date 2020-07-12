import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";
import CarOwnerForm from "../../components/ExtendProfileForms/CarOwnerForm";
import styles from "./ExtendProfile.css";
import FreelancerForm from "../../components/ExtendProfileForms/FreelancerForm";
import Page from "../../components/Page";

class ExtendProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFreelancerEnabled: false,
    };
    this.renderComponent = this.renderComponent.bind(this);
    this.renderSwitchButtons = this.renderSwitchButtons.bind(this);
  }

  renderSwitchButtons() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            this.setState({ isFreelancerEnabled: false });
          }}
          variant="contained"
          color="secondary"
        >
          <ListIcon fontSize="large" />
          Freelancer
        </Button>
        <div style={{ padding: "10px" }}></div>
        <Button
          onClick={() => {
            this.setState({ isFreelancerEnabled: true });
          }}
          variant="contained"
          color="primary"
        >
          <ListIcon fontSize="large" />
          Car Owner
        </Button>
      </div>
    );
  }

  renderComponent() {
    return (
      <Page>
        <div className={styles.container}>
          <Paper elevation={3} square className={styles.extendTitleContainer}>
            <div className={styles.extendTitleContent}>
              <h1 style={{ color: "black" }}>
                What will you be using the site as ?
              </h1>
              {this.renderSwitchButtons()}
            </div>
          </Paper>
          <Divider />
          <Paper className={styles.form}>
            {this.state.isFreelancerEnabled ? (
              <CarOwnerForm />
            ) : (
              <FreelancerForm />
            )}
          </Paper>
        </div>
      </Page>
    );
  }

  render() {
    return this.renderComponent();
  }
}

export default ExtendProfileView;
