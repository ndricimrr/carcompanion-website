import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import classes from "./AskQuestionForm.css";


export class TextFillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      areas: "",
      content: "",
      images: "",
    };
  }
  //add handleChange to post into api

  render() {
    return(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <form>
        <TextField 
          id="questionTitle" 
          label="Title" 
          onChange={(event) => this.setState({ title: event.target.value })}
          variant="outlined"
          color="secondary" 
          />
          <br />
          <br />
          <br />
        <TextField 
          id="questionAreas" 
          label="Areas" 
          onChange={(event) => this.setState({ areas: event.target.value })}
          variant="outlined"
          color="secondary" 
          />
          <br />
          <br />
          <br />
        <TextField
          id="questionContent"
          label="Content"
          multiline
          rows={4}
          //defaultValue="Add your question content ..."
          onChange={(event) => this.setState({ content: event.target.value })}
          variant="outlined"
          color="secondary"
        />
        </form>
      </div>
    );
  }
}
