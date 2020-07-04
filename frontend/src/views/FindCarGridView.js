/*
 * This view will show freelancer in a grid view
 */

// Imports
import React, { Component } from "react";
import CarBox from "../components/CarBox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CarService from "../services/CarService";

class FindCarGridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cars: [],
    };
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    CarService.getCars()
      .then((cars) => {
        this.setState({
          cars: [...cars],
          loading: false,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading Cars...</h2>;
    }
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={4}>
          {this.state.cars.map((car, index) => (
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
