import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
      <React.Fragment>
        <Paper elevation={3} style={{ padding: "10px" }}>
          <h1 style={{ color: "black" }}>
            <b>What is the point of this ?</b>
          </h1>
          <p>Asked: 23.02.2020</p>
          <h3>
            What is the problem with my car. I push the button and it doesnt
            work
          </h3>
          <h4>45 Answers</h4>
          <Button variant="contained" color="primary">
            45 Answers
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </Paper>
        <br />
        <Divider />
        <br />
        <Paper elevation={3} style={{ padding: "10px" }}>
          <Rating
            name="simple-controlled"
            value={this.state.rating}
            onChange={(event, newValue) => {
              this.setState({ rating: newValue });
            }}
          />
          <h4>Answer 2: Did you try turning it on and off ? </h4>
        </Paper>
        <Divider />
      </React.Fragment>
    );
  }
  render() {
    return this.renderComponent();
  }
}

export default QuestionView;
