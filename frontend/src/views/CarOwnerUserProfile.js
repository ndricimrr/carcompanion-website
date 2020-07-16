import React, { Component, useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import styles from "./UserProfile.css";
import mechanic from "../assets/mechanic1.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Divider from '@material-ui/core/Divider';
import { ImageUploadView } from "./ImageUploadView";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import UserService from "../services/UserService";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FindCarGridView from "./FindCarGridView";




class CarOwnerUserProfile extends Component {
    constructor(props) {
        super(props);
          this.state = {
            loading: false,
            user: null,
            password: '',
            showPassword: false,
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    }
    
    handleClickShowPassword = () => {
        this.setState(Object.assign({}, this.state, {showPassword: !this.state.showPassword}));
      };
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    // handle input field changes
    handleChange(evt) {
    const value = evt.target.value;
    // console.log("Value", value);
    this.setState({
        [evt.target.name]: value,
    });
    }

    componentWillMount(props) {
        this.setState({
        loading: true,
        });
        // let id = this.props.match.params.id;
        (async () => {
            try {
                let user = await UserService.getCurrentUser();
                this.setState({
                    user: user,
                    loading: false,
                    // password: user.password,
                    showPassword: false,
                });
            } catch (err) {
                console.error(err);
            }
        })();
    }

    render() {
        if (this.state.loading) {
            return <p>loading ...</p>;
        }
// Should prevent the user.freelancerData from being null
        // if (this.state.user.freelancerData == null) {
        //     return <p>this is not a freelancer profile</p>;
        // }

 let userExp = {
     username: "michealmk20",
     password: "123456",
     name: "Michael",
     surname: "Mckinney",
     city: "Munich, Germany",
     email: "michael@email.com",
     phone: "+12345669",
     age: 23,
     rating: 4,
     inspections: 231,
     role: "automotive mechanic",
     expertise: "BMW, Mercedes"
 }
 //to make data load from the state variable replace userExp. with this.state.user(.freelancerData)

    return (
      <div > 
            <ListGroup variant="flush">
                <div>
                <br/> 
                <ListGroupItem>
                    <h6>You wanna create and manage the digital profiles of your cars? Take a tour in your Garage!</h6>
                    {/* <Button variant="contained" color="primary">See my Garage</Button> */}
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Expand my Garage</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {/* <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography> */}
                        <FindCarGridView/>
                        </AccordionDetails>
                    </Accordion>
                    <br/>
                    <br/>
                    <h6>Your Garage still holds hidden treasures? Then put your car for sale with the best price!</h6>
                    <Button variant="contained" color="secondary">sell your car</Button>
                    <br/>
                    <br/>
                </ListGroupItem>
            </div>
        </ListGroup>
      </div>
    );
}
}
export default CarOwnerUserProfile;