//Photo
// welcome name
//General info: name surname username, email, change password, insert your car for sale
//, regsitered cars, cars for sale, 

import React, { Component } from "react";
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';




const CarOwnerUserProfile = (props) => {
    const classes = useStyles();
    return(
        <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="name">
                Name
            </InputLabel>
            <BootstrapInput defaultValue="Michael" id="name"/>
        </FormControl>
    );
}
export default CarOwnerUserProfile;