import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./PostCarView.css";
import CarService from "../services/CarService";

class PostCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      year: 0,
      mileage: 0,
      price: 0,
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
        this.props.history.push("/");
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
      <div className={styles.container}>
        <h2>Post Car</h2>
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Make"
          name="make"
          onChange={this.handleChange}
          value={this.state.make}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Model"
          name="model"
          onChange={this.handleChange}
          value={this.state.model}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Year"
          type="number"
          name="year"
          onChange={this.handleChange}
          value={this.state.year}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Mileage"
          name="mileage"
          type="number"
          onChange={this.handleChange}
          value={this.state.mileage}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Price"
          type="number"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleCreateCar}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default PostCarView;
