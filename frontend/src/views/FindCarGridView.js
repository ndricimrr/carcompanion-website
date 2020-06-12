/*
 * This view will show freelancer in a grid view
 */

// Imports
import React from "react";
import Freelancer from "../components/Freelancer";
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
  var freelancers = [
    {
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "TOP RATED",
      name: "JOHN SMITH",
      role: "MECHANIC",
      inspections: "328",
      rating: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "NEW",
      name: "MANUEL KRAUSE",
      role: "TIRE TECHNICIAN",
      inspections: "18",
      rating: "4",
    },
    {
      image:
        "https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "-30%",
      name: "MARIE SCHEDL",
      role: "MECHANIC",
      inspections: "108",
      rating: "4",
    },
    {
      image:
        "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      bedge: "",
      name: "SELIM AKSOY",
      role: "ELECTRICIAN EXPERT",
      inspections: "88",
      rating: "3",
    },
    {
      image:
        "https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "TOP RATED",
      name: "BLAKE SMITH",
      role: "MECHANIC",
      inspections: "188",
      rating: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/112475/pexels-photo-112475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "TOP RATED",
      name: "JOHN SMITHs",
      role: "MECHANIC",
      inspections: "328",
      rating: "5",
    },
    {
      image:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      bedge: "NEW",
      name: "MANUEL RAUSE",
      role: "TIRE TECHNICIAN",
      inspections: "18",
      rating: "4",
    },
    {
      image:
        "https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "-30%",
      name: "MARIo SCHEDL",
      role: "MECHANIC",
      inspections: "108",
      rating: "4",
    },
    {
      image:
        "https://images.pexels.com/photos/2684218/pexels-photo-2684218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "",
      name: "SELIM ALtay",
      role: "ELECTRICIAN EXPERT",
      inspections: "88",
      rating: "3",
    },
    {
      image:
        "https://images.pexels.com/photos/4056598/pexels-photo-4056598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bedge: "TOP RATED",
      name: "JIMMU SMITH",
      role: "MECHANIC",
      inspections: "188",
      rating: "5",
    },
  ];

  return (
    <React.Fragment>
      <Grid container justify="center" spacing={4}>
        {freelancers.map((freelancer) => (
          <Grid key={freelancer.name} item>
            <Freelancer
              image={freelancer.image}
              bedge={freelancer.bedge}
              name={freelancer.name}
              role={freelancer.role}
              inspections={freelancer.inspections}
              rating={freelancer.rating}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default FindCarGridView;
