/*
 * This view will show freelancer in a grid view
 */

// Imports
import React, { Component } from "react";
import CarBox from "../components/CarBox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

class FindCarGridView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("grid", this.props.cars)
    if (this.props.cars == undefined) {
      return <h2>No Cars...</h2>;
    }

    let cars = this.props.filteredCars.length != 0 || this.props.filtersSet ? this.props.filteredCars : this.props.cars
    console.log("cars", this.props.cars)
    console.log("filteredCars", this.props.filteredCars)
    console.log("render", cars)
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={4}>
          {cars.map((car, index) => (
            <Grid key={index} item>
              <CarBox key={index} car={car} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default FindCarGridView;
