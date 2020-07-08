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
          <a href="#">{this.props.answer.answer_owner}</a> answered {this.props.answer.date}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4>{this.props.answer.content}</h4>
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
