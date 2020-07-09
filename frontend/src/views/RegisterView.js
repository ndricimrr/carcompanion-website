import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListIcon from '@material-ui/icons/List';
import QuestionDetail from "../components/QuestionDetail";
import AnswerForm from "../components/AnswerForm";
import TextField from "@material-ui/core/TextField";
import CarOwnerForm from "../components/CarOwnerForm";

import AnswerCard from "../components/AnswerCard";
import FreelancerForm from "../components/FreelancerForm";

class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rating: 0,
      isAnsweringEnabled: false,
      isAnswerListShowing: false,
      answers: [
        {
          surname: "",
          firstName: "",
          areaOfExpertise: "",
          numberOfInspections: "",
          certification: "",
        },
        
      ],
    };
    this.renderComponent = this.renderComponent.bind(this);
    this.renderResponseRow = this.renderResponseRow.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ isAnsweringEnabled: false });
    alert("hello");
  }

  handleButtonClick() {
    this.setState({ isAnsweringEnabled: true });
    alert("hello");
  }

  renderResponseRow() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Button
          onClick={() => {
            this.setState({ isAnsweringEnabled: false });
          }}
          variant="contained"
          color="secondary"
        >
          <ListIcon fontSize="large" />
          Freelancer
        </Button>
        <p>..</p>
        <Button
          onClick={() => {
            this.setState({ isAnsweringEnabled: true });
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
      <React.Fragment>
        <Paper
          elevation={1}
          square
          style={{ padding: "10px", paddingTop: "0" }}
        >
          <h1 style={{ color: "black" }}>Registration Form</h1>
          {this.renderResponseRow()}
        </Paper>
        <br />
        <Divider />
        <br />
        {this.state.isAnsweringEnabled ? (
          <CarOwnerForm />
        ) : (
          this.state.answers.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <FreelancerForm answer={item} />
                <br />
              </React.Fragment>
            );
          })
        )}
      </React.Fragment>
    );
  }
  render() {
    return this.renderComponent();
  }
}

export default RegisterView;
