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
    label: "Badge",
    values: [
      {
        key: "beginner",
        val: "Beginner",
      },
      {
        key: "medium",
        val: "Medium",
      },
      {
        key: "advanced",
        val: "Advanced",
      },
      {
        key: "expert",
        val: "Expert",
      },
    ],
  },
  {
    label: "Expertise",
    values: [
      {
        key: "repairs",
        val: "Car repair",
      },
      {
        key: "maintenance",
        val: "Car maintenance",
      },
      {
        key: "diagnostics",
        val: "Diagnostics",
      },
      {
        key: "inspections",
        val: "Inspections",
      },
      {
        key: "system",
        val: "Electrical systems",
      },
      {
        key: "replacement",
        val: "Part replacements",
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
