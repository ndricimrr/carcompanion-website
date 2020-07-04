import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class QuestionDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "black" }}>
          <b>What is the point of this ?</b>
        </h1>
        <p>Asked: 23.02.2020</p>
        <h3>
          What is the problem with my car. I push the button and it doesnt work
        </h3>
      </React.Fragment>
    );
  }
}

export default QuestionDetail;
