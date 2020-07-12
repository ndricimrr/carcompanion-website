import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MechanicLogo from "../../assets/mechanic.svg";
import styles from "./FreelancerForm.css";
import Button from "@material-ui/core/Button";
import AlertButton from "../AlertButton";
import UserService from "../../services/UserService";
import { withRouter } from "react-router-dom";

class FreelancerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      expertise: "",
      yearsOfExperience: 0,
      address: "",
      telephone: 0,
      description: "",
    };
    this.updateFreelancer = this.updateFreelancer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async updateFreelancer(event) {
    event.preventDefault();
    let freelancer = {
      name: this.state.name,
      surname: this.state.surname,
      expertise: this.state.expertise,
      address: this.state.address,
      telephone: this.state.telephone,
      yearsOfExperience: this.state.surname,
      description: this.state.expertise,
    };
    try {
      let ret = await UserService.updateFreelancerData(freelancer);
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={MechanicLogo} alt="Mechanics Logo" />
        <form>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              name="name"
              onChange={this.handleChange}
              required={true}
              value={this.state.name}
              style={{ padding: "10px" }}
              errortext="Name is required"
            />
            <TextField
              id="surname"
              label="Surname"
              onChange={this.handleChange}
              variant="outlined"
              name="surname"
              value={this.state.surname}
              required={true}
              errortext="Surname is required"
              style={{ padding: "10px" }}
            />
            <TextField
              id="address"
              label="Address"
              onChange={this.handleChange}
              variant="outlined"
              value={this.state.address}
              name="address"
              errortext="Address is required"
              required={true}
              style={{ padding: "10px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              id="expertise"
              label="Area of Expertise"
              onChange={this.handleChange}
              variant="outlined"
              value={this.state.expertise}
              name="expertise"
              errortext="expertise of expertise is required"
              required={true}
              style={{ padding: "10px" }}
            />
            <TextField
              id="yoe"
              label="Years of experience"
              onChange={this.handleChange}
              value={this.state.yearsOfExperience}
              variant="outlined"
              errortext="Years of Experience cannot be negative"
              name="yearsOfExperience"
              required={true}
              type="number"
              style={{ padding: "10px" }}
            />
            <TextField
              id="telephone"
              label="Phone Number"
              onChange={this.handleChange}
              value={this.state.telephone}
              variant="outlined"
              errortext="Phone number is required"
              name="telephone"
              required={true}
              type="number"
              style={{ padding: "10px" }}
            />
          </div>
          <TextField
            id="description"
            onChange={this.handleChange}
            label="Add a short description"
            variant="outlined"
            name="description"
            required={true}
            value={this.state.description}
            style={{ padding: "10px", width: "100%" }}
            multiline
            rows={3}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "10px" }}>
              <Button
                size="large"
                variant="contained"
                id="submit"
                type="submit"
                color="secondary"
                onClick={this.updateFreelancer}
                disabled={
                  this.state.name == "" ||
                  this.state.surname == "" ||
                  this.state.expertise == "" ||
                  this.state.yearsOfExperience < 0 ||
                  this.state.telephone <= 0 ||
                  this.state.address == "" ||
                  this.state.description == ""
                    ? true
                    : false
                }
              >
                Save
              </Button>
            </div>
            <AlertButton
              buttonTitle={"Skip"}
              alertTitle={"Are you sure ?"}
              alertContent={
                "You will not be able to use our all of our services"
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FreelancerForm);
