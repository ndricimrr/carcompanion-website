import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./PostCarView.css";
import CarService from "../services/CarService";
import { ImageUploadView } from "./ImageUploadView";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../components/Page";
import UserService from '../services/UserService'
import { withRouter } from "react-router-dom";
import {carPost} from "./RawData.js"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

import ListIcon from "@material-ui/icons/List";

class PostCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
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
    console.log("name", evt.target.name)
    this.setState({
      [evt.target.name]: value,
    });
    console.log("State", this.state[evt.target.name]);
  }

  componentWillMount(props) {
        this.setState({
        loading: true,
        });
        (async () => {
            try {
                let user = await UserService.getUserData();
                this.setState({
                    user: user,
                    loading: false
                });
                this.setState({
                    isCarOwner: (user.carOwnerData.name != null)})
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
      
    )
  
     {
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
        {this.state.isCarOwner ? (
          <React.Fragment>
          <center><h1 className={styles.h1Style}>Sell your car!</h1></center>   
          <Grid container justify="center" spacing={8} style={{flex: "1"}}>
          {carPost.map((spec, index) => (
            <Grid key={spec.label} item>
          <FormControl variant="filled" style={{width: "600px"}} >
            <InputLabel id="demo-simple-select-filled-label">
              {spec.label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={this.state[name]}
              onChange={this.handleChange}
              name={spec.name}
            >
              <MenuItem value="">
                <em>Any</em>
              </MenuItem>
              {spec.values.map((val, index) => (
                <MenuItem key={index} value={val.key}>
                  {val.val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
        ))}
        <Grid key={"mileage"} item>
        <TextField
                id="outlined-required"
                label="Mileage (in km)"
                name="mileage"
                type="number"
                onChange={this.handleChange}
                value={this.state.mileage}
                variant="filled"
                style={{width: "600px" }}
              />
            </Grid>
            <Grid key={"price"} item>
            <TextField
                id="outlined-required"
                label="Price (in €)"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
                variant="filled"
                style={{width: "600px"}}
              />
              </Grid>
              <Grid key={"boost"} item>

              <div style={{display: "flex", justifyContent: "space-around", width: "600px"}}>
                <Button variant="contained" color="secondary">
                Boost your car!
             </Button>
             <Button variant="outlined" color="primary">
              Advanced Options
            </Button>
              </div>
              </Grid>
        </Grid>
        <center><Button
            variant="contained"
            color="primary"
            onClick={this.handleCreateCar}
            style={{ 
              width: 250,
              height: 50,
              marginTop: "20px"
            }}
            size="large"
          >
            Post
          </Button></center>
        </React.Fragment>
        ) : (<div style={{marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}> 
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
