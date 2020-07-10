import React, { Component } from "react";
import cars from "../assets/findCar.png";
import Rating from "@material-ui/lab/Rating";
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemIcon, Button } from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText';
import EuroIcon from '@material-ui/icons/Euro';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CommuteIcon from '@material-ui/icons/Commute';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import DashboardIcon from '@material-ui/icons/Dashboard';
import styles from "./CarDescriptionView.css";

let car = {
    brand: "BMW",
    model: "1 series",
    year: 2017,
    price: "20.000",
    mileage: "135.000 km",
    image: "../assets/findCar.png"
}

export class CarDescriptionView extends Component {

    render() {
      return (
        <div className={styles.center}>
            <img className={styles.imageStyle} src={cars}/>
            <br/>
            <div className={styles.center}>
                <h3>{car.brand} {car.model}</h3>
            </div>
            <Box display="flex" 
                alignItems="center"
                justifyContent="center"> 
                <List>
                <ListItem>
                    <ListItemIcon> <EuroIcon /> </ListItemIcon>
                    <ListItemText primary="Price" secondary={car.price} />
                </ListItem>
                <ListItem>
                    <ListItemIcon> <DateRangeIcon /> </ListItemIcon>
                    <ListItemText primary="Year" secondary={car.year} />
                </ListItem>
                <ListItem>
                    <ListItemIcon> <CommuteIcon /> </ListItemIcon>
                    <ListItemText primary="4-Door Sedan"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon> <LocalGasStationIcon /> </ListItemIcon>
                    <ListItemText primary="Diesel"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon> <DashboardIcon /> </ListItemIcon>
                    <ListItemText primary="Mileage" secondary={car.mileage} />
                </ListItem>
                </List>
            </Box>
            {/* Button should send request to findCar */}
            <Button variant="contained" color="primary">Contact Seller</Button>
            <br/>
        </div>
      );
    }
} 