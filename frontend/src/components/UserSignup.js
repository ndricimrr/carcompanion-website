"use strict";

import React from "react";
import { Card, Button, TextField } from "react-md";
import { withRouter } from "react-router-dom";

import { AlertMessage } from "./AlertMessage";
import Page from "./Page";
import * as EmailValidator from 'email-validator'

const style = { maxWidth: 500 };

class UserSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      emailError: "Email is not valid"
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(value) {
    this.setState(Object.assign({}, this.state, { email: value }));
    if (EmailValidator.validate(this.state.email)) {
      this.setState({emailError: ""})
    }
  }

  handleChangeUsername(value) {
    this.setState(Object.assign({}, this.state, { username: value }));
  }

  handleChangePassword(value) {
    this.setState(Object.assign({}, this.state, { password: value }));
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };

    this.props.onSubmit(user);
  }

  render() {
    return (
      <Page>
        <Card style={style} className="md-block-centered">
          <form
            className="md-grid"
            onSubmit={this.handleSubmit}
            onReset={() => this.props.history.goBack()}
          >
            <TextField
              label="email"
              id="EmailField"
              type="text"
              className="md-row"
              required={true}
              value={this.state.email}
              onChange={this.handleChangeEmail}
              errorText={this.state.emailError}
              error={!EmailValidator.validate(this.state.email)}
            />
            <TextField
              label="Username"
              id="UsernameField"
              type="text"
              className="md-row"
              required={true}
              value={this.state.username}
              onChange={this.handleChangeUsername}
              errorText="Username is required"
            />
            <TextField
              label="Password"
              id="PasswordField"
              type="password"
              className="md-row"
              required={true}
              value={this.state.password}
              onChange={this.handleChangePassword}
              errorText="Password is required"
            />

            <Button
              id="submit"
              type="submit"
              disabled={
                this.state.email == undefined ||
                this.state.email == "" ||
                !EmailValidator.validate(this.state.email) ||
                this.state.username == undefined ||
                this.state.username == "" ||
                this.state.password == undefined ||
                this.state.password == ""
                  ? true
                  : false
              }
              raised
              primary
              className="md-cell md-cell--2"
            >
              Register
            </Button>
            <Button
              id="reset"
              type="reset"
              raised
              secondary
              className="md-cell md-cell--2"
            >
              Dismiss
            </Button>
            <AlertMessage className="md-row md-full-width">
              {this.props.error ? `${this.props.error}` : ""}
            </AlertMessage>
          </form>
        </Card>
      </Page>
    );
  }
}

export default withRouter(UserSignup);
