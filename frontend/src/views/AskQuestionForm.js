import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
  //add handleChange when submitting to post into api

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
        <h1>{this.props.title}</h1>
        <br />
        <br />
        <form>
        <TextField 
          id="questionTitle" 
          label="Title" 
          onChange={(event) => this.setState({ title: event.target.value })}
          variant="outlined"
          color="secondary"
          style={{width: 500}} 
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
          style={{width: 500}}
          />
          <br />
          <br />
          <br />
        <TextField
          id="questionContent"
          label="Content"
          multiline
          rows={5}
          //defaultValue="Add your question content ..."
          onChange={(event) => this.setState({ content: event.target.value })}
          variant="outlined"
          color="secondary"
          style={{width: 500}}
        />
        <br />
        <br />
        <br />
        <ImageUploadView />
        </form>
      </div>
    );
  }
}
