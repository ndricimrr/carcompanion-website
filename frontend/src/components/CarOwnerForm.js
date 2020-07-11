import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FreelancerForm extends Component {
  render() {
    return (
      <React.Fragment>
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
        <Button size="large" variant="contained" color="primary">
          Post your car!
        </Button>
        <br />
        <br />
        <Button size="small" variant="outlined" color="primary">
          Edit car post
        </Button>
        <br />
        <br />
        <Button size="small" variant="outlined" color="primary">
          Delete car post
        </Button>
        <br />
        <br />
        <Button size="large" variant="contained" color="secondary">
          Find an expert!
        </Button>
      </React.Fragment>
    );
  }
}

export default FreelancerForm;