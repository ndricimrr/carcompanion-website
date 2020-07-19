import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./FreelancerRequestView.css";
import UserService from "../services/UserService";
import RequestService from "../services/RequestService";
import { withRouter } from "react-router-dom";

class RequestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingDate: "",
      message: "",
      address: "",
      requestHistory: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  // handle input field changes
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value,
    });
  }

  // call create car service
  async sendRequest() {
    if (
      this.state.message != "" &&
      this.state.meetingDate != "" &&
      this.state.contact != ""
    ) {
      try {
        let request = {
          senderID: UserService.getCurrentUser().id,
          receiverID: this.props.match.params.id,
          type: this.props.type,
          message: this.state.message,
          meetingDate: this.state.meetingDate,
          contact: this.state.contact,
        };
        let ret = await RequestService.createRequest(request);

        this.props.history.push("/requests");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please fill in all the fields properly");
    }
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.type == "car" ? (
          <h1 className={styles.h1Style}>Contact the seller</h1>
        ) : (
          <h1 className={styles.h1Style}>Contact your freelancer</h1>
        )}
        Meeting Date
        <TextField
          id="meetingDate"
          label=""
          variant="outlined"
          name="meetingDate"
          color="secondary"
          onChange={this.handleChange}
          value={this.state.meetingDate}
          type="date"
          style={{ padding: "10px" }}
        />
        <TextField
          id="message"
          label="Describe your message"
          variant="outlined"
          name="message"
          multiline
          rows={5}
          color="secondary"
          onChange={this.handleChange}
          value={this.state.message}
          style={{ padding: "10px" }}
        />
        <TextField
          id="contact"
          label="Contact Method"
          variant="outlined"
          name="contact"
          multiline
          rows={4}
          color="secondary"
          onChange={this.handleChange}
          value={this.state.contact}
          style={{ padding: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ padding: "10px" }}
          size="large"
          onClick={this.sendRequest}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default withRouter(RequestView);
