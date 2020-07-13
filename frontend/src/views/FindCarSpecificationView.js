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
    label: "Make",
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
    label: "Mileage",
    values: [
      {
        key: "5000-10000",
        val: "5.000 - 10.000 km",
      },
      {
        key: "10000-20000",
        val: "10.000 - 20.000 km",
      },
      {
        key: "20000-30000",
        val: "20.000 - 30.000 km",
      },
      {
        key: "30000-40000",
        val: "30.000 - 40.000 km",
      },
      {
        key: "40000-50000",
        val: "40.000 - 50.000 km",
      },
      {
        key: "50000-60000",
        val: "50.000 - 60.000 km",
      },
      {
        key: "60000-80000",
        val: "60.000 - 80.000 km",
      },
      {
        key: "80000-100000",
        val: "80.000 - 100.000 km",
      },
      {
        key: "100000-",
        val: "More than 100.000 km",
      },
    ],
  },
  {
    label: "Price",
    values: [
      {
        key: "0-500",
        val: "0 - 500 €",
      },
      {
        key: "500-1000",
        val: "500 - 1.000 €",
      },
      {
        key: "1000-2000",
        val: "1.000 - 2.000 €",
      },
      {
        key: "2000-5000",
        val: "2.000 - 5.000 €",
      },
      {
        key: "5000-10000",
        val: "5.000 - 10.000 €",
      },
      {
        key: "10000-20000",
        val: "10.000 - 20.000 €",
      },
      {
        key: "20000-50000",
        val: "20.000 - 50.000 €",
      },
      {
        key: "50000-100000",
        val: "50.000 - 100.000 €",
      },
      {
        key: "100000-",
        val: "More than 100.000 €",
      },
    ],
  },
];

const FindCarSpecificationView = (props) => {
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

export default FindCarSpecificationView;
