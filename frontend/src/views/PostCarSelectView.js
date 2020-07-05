/*
 * This view will show PostCar Select options
 */

// Imports
import React from "react";
import PostCarInput from "../components/PostCarSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 450,
    bottom: 15,
    right: 65,
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
        key: "mercedes",
        val: "Mercedes Benz",
      },
      {
        key: "bmw",
        val: "BMW",
      },
      {
        key: "audi",
        val: "Audi",
      },
      {
        key: "vw",
        val: "VolksWagen",
      },
    ],
  },

  
];

const PostCarSelectView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        {specs.map((spec, index) => (
          <PostCarInput
            label={spec.label}
            key={index}
            values={spec.values}
          />
        ))}
      </center>
      
    </div>
  );
};

export default PostCarSelectView;
