/*
 * This view will show freelancers page
 */

// Imports
import React from "react";
import SpecificationInput from "../components/SpecificationInput";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: "#b6cef2",
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-between",
  },
  button: {
    padding: 8,
    margin: 10,
  },
}));

const specs = [
  {
    label: "Brand",
    values: [
      {
        key: "audi",
        val: "Audi",
      },
      {
        key: "bmw",
        val: "BMW",
      },
      {
        key: "ford",
        val: "Ford",
      },
      {
        key: "mercedes",
        val: "Mercedes Benz",
      },
      {
        key: "opel",
        val: "Opel",
      },
      {
        key: "vw",
        val: "VolksWagen",
      },
    ],
  },
  {
    label: "Model",
    values: [
      {
        key: "A1",
        val: "A1",
      },
      {
        key: "A2",
        val: "A2",
      },
      {
        key: "A3",
        val: "A3",
      },
      {
        key: "116",
        val: "116",
      },
      {
        key: "118",
        val: "118",
      },
      {
        key: "120",
        val: "120",
      },
      {
        key: "fiesta",
        val: "Fiesta",
      },
      {
        key: "focus",
        val: "Focus",
      },
      {
        key: "galaxy",
        val: "Galaxy",
      },
      {
        key: "A180",
        val: "A180",
      },
      {
        key: "A200",
        val: "A200",
      },
      {
        key: "B180",
        val: "B180",
      },
      {
        key: "astra",
        val: "Astra",
      },
      {
        key: "corsa",
        val: "Corsa",
      },
      {
        key: "insignia",
        val: "Insignia",
      },
      {
        key: "golf",
        val: "Golf",
      },
      {
        key: "polo",
        val: "Polo",
      },
      {
        key: "scirocco",
        val: "Scirocco",
      },
    ],
  },
  {
    label: "Year",
    values: [
      {
        key: "2020",
        val: "2020",
      },
      {
        key: "2019",
        val: "2019",
      },
      {
        key: "2018",
        val: "2018",
      },
      {
        key: "2017",
        val: "2017",
      },
      {
        key: "2016",
        val: "2016",
      },
      {
        key: "2015",
        val: "2015",
      },
      {
        key: "2014",
        val: "2014",
      },
      {
        key: "2013",
        val: "2013",
      },
      {
        key: "2012",
        val: "2012",
      },
      {
        key: "2011",
        val: "2011",
      },
      {
        key: "2010",
        val: "2010",
      },
      {
        key: "2005",
        val: "2005",
      },
      {
        key: "2000",
        val: "2000",
      },
      {
        key: "1990",
        val: "1990",
      },
      {
        key: "1980",
        val: "1980",
      },
      {
        key: "1970",
        val: "1970",
      },
    ],
  },
  {
    label: "Problem Area",
    values: [
      {
        key: "lights",
        val: "Warning Lights",
      },
      {
        key: "engine",
        val: "Engine",
      },
      {
        key: "fuel",
        val: "Fuel",
      },
      {
        key: "tires",
        val: "Flat Tires",
      },
      {
        key: "battery",
        val: "Battery",
      },
      {
        key: "brakes",
        val: "Brakes",
      },
      {
        key: "motor",
        val: "Motor",
      },
      {
        key: "Wheel",
        val: "Steering Wheel",
      },
      {
        key: "overheating",
        val: "Overheating",
      },
    ],
  },
];

const FreelancerSpecificationView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        {specs.map((spec, index) => (
          <SpecificationInput
            label={spec.label}
            key={index}
            values={spec.values}
          />
        ))}
      </center>
      <div className={classes.buttons}>
        <center>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Advanced Options
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Search
          </Button>
        </center>
      </div>
    </div>
  );
};

export default FreelancerSpecificationView;
