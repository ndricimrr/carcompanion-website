import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class QuestionDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "black" }}>
          <b>{this.props.title}</b>
        </h1>
        <p>Asked: {this.props.date}</p>
        <h3>
          {this.props.content}
        </h3>
      </React.Fragment>
    );
  }
}

export default QuestionDetail;
