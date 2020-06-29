import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./AddFreelancer.css";
import FreelancerService from "../services/FreelancerService";

class AddFreelancerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freelancerName: "",
      surname: "",
      age: 0,
      rating: 0,
      inspections: 0,
      role: "",
      make: "",
      model: "",
      badge: "",
      image: ""
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
      this.state.freelancerName != "" &&
      this.state.surname != "" &&
      this.state.age > 18 &&
      this.state.age < 90 &&
      this.state.rating >= 0 &&
      this.state.rating <= 5 &&
      this.state.inspections > 0 &&
      this.state.role != "" &&
      this.state.make != "" &&
      this.state.badge != "" &&
      this.state.model != "" &&
      this.state.image != ""
    ) {
      try {
        let freelancer = {
          freelancerName: this.state.freelancerName,
          surname: this.state.surname,
          age: this.state.age,
          rating: this.state.rating,
          inspections: this.state.inspections,
          role: this.state.role,
          make: this.state.make,
          model: this.state.model,
          badge: this.state.badge,
          image: this.state.image
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
          name="freelancerName"
          onChange={this.handleChange}
          value={this.state.freelancerName}
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
          label="Rating"
          type="number"
          name="rating"
          onChange={this.handleChange}
          value={this.state.rating}
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
          label="Role"
          name="role"
          onChange={this.handleChange}
          value={this.state.role}
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
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Badge"
          name="badge"
          onChange={this.handleChange}
          value={this.state.badge}
          variant="outlined"
        />
        <TextField
          InputProps={{ className: styles.inputField }}
          id="outlined-required"
          label="Image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
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

export default AddFreelancerView;
