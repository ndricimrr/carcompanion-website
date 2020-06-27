import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./AddFreelancer.css";
import FreelancerService from "../services/FreelancerService";

class AddFreelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: 0,
      review: 0,
      inspections: 0,
      area: ""
      make: "",
      model: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddFreelancer = this.handleAddFreelancer.bind(this);
  }

  // handle input field changes
  handleChange(evt) {
    const value = evt.target.value;
    console.log("Value", value);
    this.setState({
      [evt.target.name]: value,
    });
  }

  // call create freelancer service
  async handleAddFreelancer() {
    if (
      this.state.name != "" &&
      this.state.surname != "" &&
      this.state.age != 0 &&
      this.state.review != 0 &&
      this.state.inspections != 0 &&
      this.state.area != "" &&
      this.state.make != "" &&
      this.state.model != "" 
    ) {
      try {
        let freelancer = {
          name: this.state.name,
          surname: this.state.surname,
          age: this.state.age,
          review: this.state.review,
          inspections: this.state.inspections,
          area: this.state.area,
          make: this.state.make,
          model: this.state.model,
        };
        let ret = await FreelancerService.createFreelancer(freelancer);
        this.props.history.push("/");
      } catch (err) {
        console.error(err);
        this.setState(
          Object.assign({}, this.state, { error: "Error while creating freelancer" })
        );
      }
    } else {
      window.alert("Please fill in all the fields!");
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Add Freelancer</h2>
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Surname"
          name="surname"
          onChange={this.handleChange}
          value={this.state.surname}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Age"
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Review"
          type="number"
          name="review"
          onChange={this.handleChange}
          value={this.state.review}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Inspections"
          type="number"
          name="inspections"
          onChange={this.handleChange}
          value={this.state.inspections}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Area"
          name="area"
          onChange={this.handleChange}
          value={this.state.area}
          variant="outlined"
        />
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
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddFreelancer}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default AddFreelancer;
