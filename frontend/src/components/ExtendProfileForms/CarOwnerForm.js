import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./FreelancerForm.css";
import CarOwnerLogo from "../../assets/driver.svg";
import AlertButton from "../AlertButton";
import { withRouter } from "react-router-dom";
import UserService from "../../services/UserService";

class CarOwnerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      address: "",
      preferredModel: "",
    };
    this.updateCarOwnerData = this.updateCarOwnerData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async updateCarOwnerData() {
    event.preventDefault();
    let owner = {
      name: this.state.name,
      surname: this.state.surname,
      address: this.state.address,
      preferredModel: this.state.preferredModel,
    };
    try {
      let ret = await UserService.updateCarOwnerData(owner);
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
        <img src={CarOwnerLogo} alt="CarOwner Logo" />
        <form onSubmit={this.updateCarOwnerData}>
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
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
            <TextField
              id="preference"
              label="Preferred Model"
              onChange={this.handleChange}
              value={this.state.preferredModel}
              variant="outlined"
              errortext="Preferred Model is required"
              name="preferredModel"
              required={true}
              style={{ padding: "10px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ padding: "10px" }}>
              <Button
                size="large"
                variant="contained"
                id="submit"
                type="submit"
                color="secondary"
                disabled={
                  this.state.name == "" ||
                  this.state.surname == "" ||
                  this.state.address == "" ||
                  this.state.preferredModel == ""
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

export default withRouter(CarOwnerForm);
