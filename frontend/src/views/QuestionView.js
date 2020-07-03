import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent() {
    return (
      <Paper elevation={3} style={{ padding: "10px" }}>
        <h1 style={{ color: "black" }}>
          <b>What is the point of this ?</b>
        </h1>
        <p>Asked: 23.02.2020</p>
        <h3>
          What is the problem with my car. I push the button and it doesnt work
        </h3>
        <h4>45 Answers</h4>
        <h4>Answer 1: You dumb</h4>
        <Rating
          name="simple-controlled"
          value={this.state.rating}
          onChange={(event, newValue) => {
            this.setState({ rating: newValue });
          }}
        />
        <Divider />
        <h4>Answer 2: Did you try turning it on and off ? </h4>
        <Divider />
        <h4>Answer 3: You need to press the other button ? </h4>
      </Paper>
    );
  }
  render() {
    return this.renderComponent();
  }
}

export default QuestionView;
