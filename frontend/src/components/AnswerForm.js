import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AnswerForm extends Component {
  render() {
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
}

export default AnswerForm;
