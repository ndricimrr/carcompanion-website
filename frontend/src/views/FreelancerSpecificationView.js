/*
* This view will show freelancers page
*/

// Imports
import React from 'react';
import SpecificationInput from '../components/SpecificationInput'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    backgroundColor: "#b6cef2"
  },
  buttons: {
        flex: 1,
        justifyContent: "center",
        alignContent: "space-between"
  },
  button: {
      padding: 8,
      margin: 10
  }
}));

const specs = [
    {
        label: "Brand",
        values: [
            {
                key: "mercedes",
                val: "Mercedes Benz"
            },
            {
                key: "bmw",
                val: "BMW"
            },
            {
                key: "audi",
                val: "Audi"
            },
            {
                key: "vw",
                val: "VolksWagen"
            },
        ]
    },
    {
        label: "Model",
        values: [
            {
                key: "c220",
                val: "C220"
            },
            {
                key: "e630",
                val: "E630"
            },
            {
                key: "gla",
                val: "GLA"
            },
        ]
    },
    {
        label: "Year",
        values: [
            {
                key: "2018",
                val: "2018"
            },
            {
                key: "2019",
                val: "2019"
            },
            {
                key: "2020",
                val: "2020"
            },
        ]
    },
    {
        label: "Problem Area",
        values: [
            {
                key: "mechanic",
                val: "Mechanic"
            },
            {
                key: "tire",
                val: "Tire"
            },
            {
                key: "electrical",
                val: "Electrical"
            },
        ]
    }
]

const FreelancerSpecificationView = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <center>
                {specs.map((spec) =>(
                    <SpecificationInput label={spec.label} values={spec.values}/>
                ))}
            </center>
            <div className={classes.buttons}>
                <center>
                    <Button variant="contained" color="primary" className={classes.button}>Advanced Options</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Search</Button>
                </center>
            </div>
        </div>
    );
}

export default FreelancerSpecificationView;