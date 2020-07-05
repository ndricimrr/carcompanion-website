import React from "react";
import TextField from "@material-ui/core/TextField";
import { ImageUploadView } from "./ImageUploadView";
import Button from "@material-ui/core/Button";
import QuestionService from "../services/QuestionService";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

class AskQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      areas: "",
      content: "",
      images: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateQuestion = this.handleCreateQuestion.bind(this);
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
  async handleCreateQuestion() {
    if (
      this.state.title != "" &&
      this.state.areas != "" &&
      this.state.content != ""
    ) {
      try {
        let question = {
          title: this.state.title,
          areas: this.state.areas,
          content: this.state.content,
          date: Date(),
        };

        let answer = {
          authorId: "6666",
          content: "88888",
          date: Date()
        }
        let ret = await QuestionService.createQuestion(question);
        this.props.history.push("/");
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <h1>{this.props.title}</h1>
        <br />
        <br />
        <form>
          <TextField
            id="questionTitle"
            label="Title"
            variant="outlined"
            name="title"
            color="secondary"
            onChange={this.handleChange}
            value={this.state.title}
            style={{ width: 500 }}
          />
          <br />
          <br />
          <br />
          <TextField
            id="questionAreas"
            label="Areas"
            variant="outlined"
            name="areas"
            color="secondary"
            onChange={this.handleChange}
            value={this.state.areas}
            style={{ width: 500 }}
          />
          <br />
          <br />
          <br />
          <TextField
            id="questionContent"
            label="Content"
            name="content"
            multiline
            rows={5}
            variant="outlined"
            color="secondary"
            onChange={this.handleChange}
            value={this.state.content}
            style={{ width: 500 }}
          />
          <br />
          <br />
          <br />
          <ImageUploadView />
          <br />
          <br />
          <br />
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "500px",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={this.handleCreateQuestion}
          >
            Submit
          </Button>
          {/* <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button> */}
        </div>
      </div>
    );
  }
}

export default AskQuestionForm;
