import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./FreelancerRequestView.css";
import CarService from "../services/CarService";
import { ImageUploadView } from "./ImageUploadView";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import FreelancerRequestHistoryView from "./FreelancerRequestHistoryView";
import Page from "../components/Page";

class FreelancerRequestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingDate: "",
      issue: "",
      address: "",
      requestHistory: "",
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
      this.state.meetingDate != "" &&
      this.state.issue != "" &&
      this.state.address != "" &&
      this.state.requestHistory >= 0
    ) {
      try {
        let car = {
          meetingDate: this.state.meetingDate,
          issue: this.state.issue,
          address: this.state.address,
          requestHistory: this.state.requestHistory,
        };
        let ret = await CarService.createCar(car);
        this.props.history.push("/findcar");
      } catch (err) {
        console.error(err);
        this.setState(
          Object.assign({}, this.state, { error: "Error while requesting a freelancer" })
        );
      }
    } else {
      window.alert("Please fill in all the fields!");
    }
  }

  render() {
    return (
      <Page>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={styles.h1Style}>Contact your freelancer</h1>        
          <br />
          <form>
            <br />
            <h6 style = {{position: "relative",
              width: 450,
              bottom: 15,
              left: 345, }}>Meeting Date</h6>
            <TextField
              id="meetingDate"
              label=""
              variant="outlined"
              name="meetingDate"
              color="secondary"
              onChange={this.handleChange}
              value={this.state.areas}
              style={{position: "relative",
              width: 450,
              bottom: 20,
              left: 345, }}
              type='date'
            />
            <br />
            <TextField
              id="issue"
              label="Describe your issue"
              variant="outlined"
              name="issue"
              multiline
              rows={5}
              color="secondary"
              onChange={this.handleChange}
              value={this.state.title}
              style={{position: "relative",
              width: 450,
              bottom: 10,
              left: 345, }}
            />
            <br />
            <TextField
              id="address"
              label="Enter your address"
              variant="outlined"
              name="address"

              color="secondary"
              onChange={this.handleChange}
              value={this.state.title}
              style={{position: "relative",
              width: 450,
              bottom: 0,
              left: 345, }}
            />
            <br/>
            <br/>  
            <FreelancerRequestHistoryView />
            <br />      
            <br />
            <br />
            <br />          
          </form>
          <br />       
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleCreateCar}
            style={{ 
              position: "center",
              left: 0,
              width: 250,
              bottom: 40, 
              height: 50
            }}
            size="large"
          >
            Submit
          </Button>
          <br />
          <br />

        </div>
      </Page>
    );
  }
}

export default FreelancerRequestView;