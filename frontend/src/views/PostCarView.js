import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./PostCarView.css";
import CarService from "../services/CarService";
import { ImageUploadView } from "./ImageUploadView";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import PostCarSelectView from "./PostCarSelectView";
import Page from "../components/Page";
import UserService from '../services/UserService'
import { withRouter } from "react-router-dom";

import ListIcon from "@material-ui/icons/List";

class PostCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "mercedez",
      model: "",
      year: "",
      mileage: 0,
      price: 0,
      images: "",
      loading: false,
      user: null,
      isCarOwner: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateCar = this.handleCreateCar.bind(this);
  }

  // handle input field changes
  handleChange(evt) {
    const value = evt.target.value;
    console.log("Value", value);
    this.setState({
      [evt.target.name]: value,
    });
  }

  componentWillMount(props) {
        this.setState({
        loading: true,
        });
        // let id = this.props.match.params.id;
        (async () => {
            try {
                let user = await UserService.getUserData();
                this.setState({
                    user: user,
                    loading: false
                });
                this.setState({
                    isCarOwner: (user.carOwnerData.name != null)})
                console.log(user)
            } catch (err) {
                console.error(err);
            }
        })();
        
    }

  // call create car service
  async handleCreateCar() {
    if (
      this.state.make != "" &&
      this.state.model != "" &&
      this.state.mileage >= 0 &&
      this.state.year >= 1990 &&
      this.state.year <= 2020 &&
      this.state.price >= 0
    ) {
      try {
        let car = {
          make: this.state.make,
          model: this.state.model,
          mileage: this.state.mileage,
          year: this.state.year,
          price: this.state.price,
        };
        let ret = await CarService.createCar(car);
        this.props.history.push("/findcar");
      } catch (err) {
        console.error(err);
        this.setState(
          Object.assign({}, this.state, { error: "Error while creating car" })
        );
      }
    } else {
      window.alert("Please fill in all the fields!");
    }
  }

  render() {
    return (
      <Page>
        {this.state.isCarOwner ? (<div
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
          <h2>Sell your car!</h2>
          <br />
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1200px",
                justifyContent: "space-evenly",
              }}
            >
              <br />
              <PostCarSelectView />

              <br />
              <TextField
                id="outlined-required"
                label="Model"
                name="model"
                onChange={this.handleChange}
                value={this.state.model}
                variant="filled"
                style={{ width: 500 }}
                margin="normal"
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1200px",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                id="outlined-required"
                label="Year"
                type="number"
                name="year"
                onChange={this.handleChange}
                value={this.state.year}
                variant="filled"
                style={{ width: 500 }}
                margin="normal"
              />
              <br />
              <br />
              <TextField
                id="outlined-required"
                label="Mileage"
                name="mileage"
                type="number"
                onChange={this.handleChange}
                value={this.state.mileage}
                variant="filled"
                style={{ width: 500 }}
                margin="normal"
              />
            </div>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1200px",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                id="outlined-required"
                label="Price"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
                variant="filled"
                style={{ width: 500 }}
                margin="normal"
              />
              <br />
              <ImageUploadView />
            </div>
          </form>
          <br />
          <div
            style={{
              position: "relative",
              right: 470,
            }}
          >
            <Button variant="outlined" color="primary">
              Advanced Options
            </Button>
          </div>
          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={this.handleCreateCar}
            style={{ width: 300 }}
            size="large"
          >
            Post
          </Button>
          <br />
          <br />
          <div
            style={{
              position: "relative",
              left: 470,
            }}
          >
            <Button variant="contained" color="secondary">
              Boost your car!
            </Button>
          </div>
        </div>) : (<div style={{marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}> 
                      <h2>You need to be a car owner in order to post a car. Please extend your profile</h2>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick = {() => {this.props.history.push("/extend-profile")}}
                      >
                        <ListIcon fontSize="large" />
                        Extend Profile
                      </Button>
                    </div>)}
        
      </Page>
    );
  }
}

export default withRouter(PostCarView);
