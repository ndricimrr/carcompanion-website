import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import QuestionDetail from "../components/QuestionDetail";
import AnswerForm from "../components/AnswerForm";

import AnswerCard from "../components/AnswerCard";

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      isAnsweringEnabled: false,
      isAnswerListShowing: false,
      answers: [
        {
          id: "1",
          answer_owner: "ndricimrr",
          answer_content: "You should turn it off and on again",
          rating: 0,
        },
        {
          id: "2",
          answer_owner: "leomessi",
          answer_content: "You should buy a new one",
          rating: 0,
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
          color="primary"
        >
          <QuestionAnswerIcon fontSize="large" />
          45
        </Button>
        <p>..</p>
        <Button
          onClick={() => {
            this.setState({ isAnsweringEnabled: true });
          }}
          variant="contained"
          color="secondary"
        >
          Answer
          <CommentIcon fontSize="large" />
        </Button>
        <p>..</p>
        <Button variant="contained" color="primary">
          Share
          <ShareIcon fontSize="large" />
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
          <QuestionDetail />
          {this.renderResponseRow()}
        </Paper>
        <br />
        <Divider />
        <br />
        {this.state.isAnsweringEnabled ? (
          <AnswerForm />
        ) : (
          this.state.answers.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <AnswerCard answer={item} />
                <br />
                <Divider />
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

export default QuestionView;
