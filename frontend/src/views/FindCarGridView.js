/*
 * This view will show freelancer in a grid view
 */

// Imports
import React from "react";
import CarBox from "../components/CarBox";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Component styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const FindCarGridView = (props) => {
  const classes = useStyles();

  // dummy data for freelancers !!!! to be taken from database
  var cars = [
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      model: "TOP RATED",
      make: "JOHN SMITH",
      year: "MECHANIC",
      mileage: "328",
      price: "5",
    },
  ];

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
};

export default FindCarGridView;
