/*
 * This view will show freelancers page
 */

// Imports
import React from "react";
import SpecificationInput from "../components/SpecificationInput";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {carFind} from "./RawData.js"


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



const FindCarSpecificationView = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <center>
        {carFind.map((spec, index) => (
          <SpecificationInput
            label={spec.label}
            key={index}
            values={spec.values}
            name={spec.name}
            onChange={props.onChange} 
            vals={props.values}
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

export default FindCarSpecificationView;
