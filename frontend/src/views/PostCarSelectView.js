/*
 * This view will show PostCar Select options
 */

// Imports
import React from "react";
import PostCarInput from "../components/PostCarSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "center",
    width: 1150,
    bottom: 15,
    right: 65,
    columnCount: 2
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
    label: "Make",
    values: [
    ],
  },
  {
    label: "Model",
    values: [
    ],
  },
  {
    label: "Year",
    values: [
    ],
  },
  {
    label: "Mileage",
    values: [
    ],
  },
  {
    label: "Price",
    values: [
    ],
  },
];

const PostCarSelectView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        {specs.map((spec, index) => (
          <PostCarInput label={spec.label} key={index} values={spec.values} />
        ))}
      </center>
    </div>
  );
};

export default PostCarSelectView;
