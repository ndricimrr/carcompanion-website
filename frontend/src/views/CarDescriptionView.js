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
import Page from "../components/Page";
import CarService from "../services/CarService";



export class CarDescriptionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          car: null,
        };        
      }


    componentWillMount(props) {
        this.setState({
            loading: true,
        });
        let id = this.props.match.params.id;
        console.log("ID", id);
        (async () => {
            try {
            let car = await CarService.getCar(id);
            this.setState({
                car: car,
                loading: false,
            });
            } catch (err) {
            console.error(err);
            }
        })();
        console.log("car", this.state.car)
    }  

    render() {

    if (this.state.car == null) {
        return (<div>The car is being loaded</div>)
    }

      return (
        <Page>
            <img className={styles.imageStyle} src={cars}/>
            <div className={styles.center}>
                <h3>
                    {this.state.car.make} {this.state.car.model}
                </h3>
                <div className={styles.center}>
                    <ListItem>
                        <ListItemIcon> <EuroIcon /> </ListItemIcon>
                        <ListItemText primary="Price" secondary={this.state.car.price} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon> <DateRangeIcon /> </ListItemIcon>
                        <ListItemText primary="Year" secondary={this.state.car.year} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon> <DashboardIcon /> </ListItemIcon>
                        <ListItemText primary="Mileage" secondary={this.state.car.mileage} />
                    </ListItem>
                </div>
                {/* Button should send request to findCar */}
                <Button variant="contained" color="primary">Contact Seller</Button>
                <br/>
            </div>
        </Page>
      );
    }
} 
export default CarDescriptionView;