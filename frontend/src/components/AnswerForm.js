import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QuestionService from '../services/QuestionService'

class AnswerForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        content: "",
        authorId: this.props.authorId
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleCreateAnswer = this.handleCreateAnswer.bind(this);
    }

    // handle input field changes
    handleChange(evt) {
      const value = evt.target.value;
      console.log("Value", value);
      this.setState({
        [evt.target.name]: value,
      });
    }

    // call create question service
    async handleCreateAnswer() {
      if (
        this.state.content != "" 
      ) {
        try {
          let answer = {
            authorId: this.state.authorId,
            content: this.state.content,
            date: Date(),
          };
          let ret = await QuestionService.createAnswer(this.props.questionId, answer);
          this.props.history.go(0);
        } catch (err) {
          console.error(err);
          this.setState(
            Object.assign({}, this.state, {
              error: "Error while creating question",
            })
          );
        }
      } else {
        window.alert("Please fill in all the fields!");
      }
    }
  render() {
    return (
      <React.Fragment>
        <TextField
          id="outlined-multiline-static"
          label="Answer..."
          multiline
          rows={4}
          placeholder="Default Value"
          variant="outlined"
          onChange={this.handleChange}
          name="content"
        />
        <br />
        <Button variant="contained" color="secondary" onClick={this.handleCreateAnswer}>
          Post
        </Button>
      </React.Fragment>
    );
  }
}

export default AnswerForm;
