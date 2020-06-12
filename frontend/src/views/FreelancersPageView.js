/*
* This view will show freelancers page
*/

// Imports
import React from 'react';
import FreelancerGridView from './FreelancerGridView'
import FreelancerSpecificationView from './FreelancerSpecificationView'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },
}));

const FreelancersPageView = (props) => {    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FreelancerSpecificationView />
            <FreelancerGridView />
        </div>
    );
}

export default FreelancersPageView;