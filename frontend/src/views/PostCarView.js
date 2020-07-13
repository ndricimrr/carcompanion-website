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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <br />
          <h1 className={styles.h1Style}>Sell your car!</h1>        
          <br />
          <br />
          <br />
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "1200px",
                justifyContent: "left",
              }}
            >
              <br />
              <PostCarSelectView />
              
              
            </div>
            <br />
            
            <br />
            <br />
            <br />
          
          </form>
          <br />
          <div
            style={{
              position: "relative",
              left: 255,
              width: 850,
              bottom: 150,            
            }}
          >
            <ImageUploadView />
          </div>
          <br />
          <div
            style={{
              position: "relative",
              right: 340,
              width: 450,
              bottom: 45,
            }}
          >
            <Button variant="contained" color="secondary">
              Boost your car!
            </Button>
          </div>
          <div
            style={{
              position: "relative",
              right: 340,
              width: 450,
              bottom: 155,
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
            style={{ 
              left: 350,
              width: 250,
              bottom: 130, 
              height: 50
            }}
            size="large"
          >
            Post
          </Button>
          <br />
          <br />
          
        </div>
      </Page>
    );
  }
}

export default PostCarView;
