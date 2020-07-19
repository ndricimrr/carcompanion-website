import React from "react";
import PostCarInput from "../components/PostCarSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "center",
    width: 1150,
    bottom: 0,
    right: 400,
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    padding: 8,
    margin: 10,
  },
}));

const specs = [
  {
    label: "Request History",
    values: [
      {
        key: "request1",
        val: "Request: 01",
      },
      {
        key: "request2",
        val: "Request: 02",
      },
      {
        key: "request3",
        val: "Request: 03",
      },
    ],
  },
];

const FreelancerRequestHistoryView = (props) => {
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

export default FreelancerRequestHistoryView;