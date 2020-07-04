import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";

class AnswerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Paper elevation={3} style={{ padding: "10px" }}>
        <p>
          <a href="#">{this.props.answer.answer_owner}</a> answered 2 days ago
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4>{this.props.answer.answer_content}</h4>
          <Rating
            name="simple-controlled"
            value={this.props.answer.rating}
          ></Rating>
        </div>
      </Paper>
    );
  }
}

export default AnswerCard;
