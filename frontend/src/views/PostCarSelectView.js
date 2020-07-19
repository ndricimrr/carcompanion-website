/*
 * This view will show PostCar Select options
 */

// Imports
import React from "react";
import PostCarInput from "../components/PostCarSelect";
import { makeStyles } from "@material-ui/core/styles";
import {carPost} from "./RawData.js"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 1150,
    bottom: 15,
    right: 290,
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



const PostCarSelectView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        {carPost.map((spec, index) => (
          <PostCarInput label={spec.label} key={index} values={spec.values} />
        ))}
      </center>
    </div>
  );
};

export default PostCarSelectView;
