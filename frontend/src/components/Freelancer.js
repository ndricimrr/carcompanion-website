/*
 * Freelancer components which keeps Freelancer data
 */
"use strict";

import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import { NavLink } from "react-router-dom";
import mechanic from "../assets/freelancer.png";

const useStyles = makeStyles((theme) => ({
  // Styles of elements
  root: {
    maxWidth: 345,
    width: 230,
    zIndex: 1,
    position: "relative",
  },
  badge: {
    zIndex: 10,
    position: "absolute",
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: "5px!important",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  lightText: {
    color: "gray",
  },
  numbers: {
    color: "#3f51b5",
    fontWeight: "bold",
    fontSize: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Freelancer = (props) => {
  const classes = useStyles();
  // Get rating of the inspector by rendering components in a loop
  const [freelanceData, setFreelanceData] = useState({
    name: props.freelance.freelancerName,
    surname: props.freelance.surname,
    age: props.freelance.age,
    rating: props.freelance.rating,
    inspections: props.freelance.inspections,
    role: props.freelance.role,
    make: props.freelance.make,
    model: props.freelance.model,
    badge: props.freelance.badge,
    expertise: props.freelance.expertise,
    telephone: props.freelance.telephone,
    email: props.freelance.email,
    city: props.freelance.city,
    image: props.freelance.image,
  });
  var rating = [];
  for (var i = 0; i < Number(freelanceData.rating); i++) {
    rating.push(<StarIcon key={i} color="primary" />);
  }
  return (
    <NavLink
      exact
      to={"/freelancers/".concat(props.freelance._id)}
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.root}>
        {/* Creating the bedge */}
        <div className={classes.badge}>{}</div>
        {/* Image of the card */}
        <CardMedia className={classes.media} image={mechanic} />
        {/* Freelancer details */}
        <CardContent>
          <center>
            <div className={classes.lightText}>{freelanceData.role}</div>
            <div className={classes.name}>
              {freelanceData.name} {freelanceData.surname}
            </div>
            <div className={classes.numbers}>{freelanceData.inspections}</div>
            <div className={classes.lightText}>INSPECTIONS</div>
            <div>{rating}</div>
          </center>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default Freelancer;
