import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";


class FreelancerForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <TextField
           id="Name"
           label="Surname"
           variant="outlined"
           name="name"
          />
          <br />
          <br />
          <TextField
           id="FirstName"
           label="First Name"
           variant="outlined"
           name="firstname"
          />
          <br />
          <br />
          <TextField
           id="Email"
           label="Email"
           variant="outlined"
           name="email"
          />
          <br />
          <br />
          <TextField
           id="expertise"
           label="Area of Expertise"
           variant="outlined"
           name="expertise"
          />
          <br />
          <br />
          <TextField
           id="inspection"
           label="Number of inspections"
           variant="outlined"
           name="inspection"
          />
          <br />
          <br />
          <TextField
           id="certification"
           label="Specify your certification"
           variant="outlined"
           name="certification"
          />
          <br />
          <br />
          <TextField
           id="description"
           label="Add a short description"
           variant="outlined"
           name="description"
           multiline
           rows={5}
          />
          <br />
          <br />
        </div>
    );
  }
}

export default FreelancerForm;
