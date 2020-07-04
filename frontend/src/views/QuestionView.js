import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ForumIcon from "@material-ui/icons/Forum";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import QuestionDetail from "../components/QuestionDetail";
import { TextareaAutosize } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
    this.renderAnswerField = this.renderAnswerField.bind(this);
  }

  handleButtonClick() {
    this.setState({ isAnsweringEnabled: false });
    alert("hello");
  }

  handleButtonClick() {
    this.setState({ isAnsweringEnabled: true });
    alert("hello");
  }

  renderAnswerField() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="secondary">
          Post
        </Button>
      </React.Fragment>
    );
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
        <div />
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
        {this.state.isAnsweringEnabled
          ? this.renderAnswerField()
          : this.state.answers.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Paper elevation={3} style={{ padding: "10px" }}>
                    <p>
                      <a href="#">{item.answer_owner}</a> answered 2 days ago
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4>{item.answer_content}</h4>
                      <Rating
                        name="simple-controlled"
                        value={this.state.rating}
                        onChange={(event, newValue) => {
                          this.setState({ rating: newValue });
                        }}
                      ></Rating>
                    </div>
                  </Paper>
                  <br />
                  <Divider />
                </React.Fragment>
              );
            })}
      </React.Fragment>
    );
  }
  render() {
    return this.renderComponent();
  }
}

export default QuestionView;
