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
import Grid from "@material-ui/core/Grid";
import Page from "../components/Page";
import Paper from "@material-ui/core/Paper";
import ListIcon from "@material-ui/icons/List";
import FreelancerDetails from "./FreelancerUserProfile";
import CarOwnerDetails from "./CarOwnerUserProfile";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class FreelancerUserProfile extends Component {
    constructor(props) {
        super(props);
          this.state = {
            loading: false,
            user: null,
            password: '',
            showPassword: false,
            isFreelancerEnabled: false,
            isFreelancer: false,
            isCarOwner: false
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
        this.renderSwitchButtons = this.renderSwitchButtons.bind(this);
    }

    renderSwitchButtons(isFreelancer, isCarOwner) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            this.setState({ isFreelancerEnabled: false });
          }}
          variant="contained"
          color="secondary"
          disabled={!isFreelancer}
        >
          <ListIcon fontSize="large" />
          Freelancer
        </Button>
        <div style={{ padding: "10px" }}></div>
        <Button
          onClick={() => {
            this.setState({ isFreelancerEnabled: true });
          }}
          variant="contained"
          color="primary"
          disabled={!isCarOwner}
        >
          <ListIcon fontSize="large" />
          Car Owner
        </Button>
        <div style={{ padding: "10px" }}></div>
        
        <Button
          variant="contained"
          color="primary"
          onClick = {() => {this.props.history.push("/extend-profile")}}
          disabled={(isFreelancer && isCarOwner)}
        >
          <ListIcon fontSize="large" />
          Extend Profile
        </Button>
      </div>
    );
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
                let user = await UserService.getUserData();
                this.setState({
                    user: user,
                    loading: false,
                    // password: user.password,
                    showPassword: false,
                });
                this.setState({
                    isFreelancer: (user.freelancerData.name != null),
                    isCarOwner: (user.carOwnerData.name != null)})
                console.log(user)
            } catch (err) {
                console.error(err);
            }
        })();
        
    }

    render() {
        if (this.state.loading) {
            return <p>loading ...</p>;
        }

    let user = {
        name: this.state.isFreelancer ? this.state.user.freelancerData.name 
              : this.state.isCarOwner ? this.state.user.carOwnerData.name : null,
        surname: this.state.isFreelancer ? this.state.user.freelancerData.surname 
              : this.state.isCarOwner ? this.state.user.carOwnerData.surname : null,
        address: this.state.isFreelancer ? this.state.user.freelancerData.address 
              : this.state.isCarOwner ? this.state.user.carOwnerData.address : null,
        phone: this.state.isFreelancer ? this.state.user.freelancerData.telephone 
              : this.state.isCarOwner ? this.state.user.carOwnerData.phone : null,
    }

    let additionalInfo = this.state.isFreelancer || this.state.isCarOwner;
    return (
        
        <Page>
        <div className={styles.container}> 
        <Card>
            <CardContent>
            <ListGroup variant="flush">
                <div> 
                <ListGroup.Item>
                    {/* <img className={styles.imageStyle} src={mechanic}/> */}
                    <h2>Welcome {this.state.user.username} </h2>
                    <Divider variant="middle" />
                    
                </ListGroup.Item>
                <br/>
                <ListGroup.Item>
                    <h4>General details</h4>
                    <br/>
                    <form noValidate autoComplete="off">
                    <Grid container justify="center" spacing={8}>
                        <Grid item>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <OutlinedInput id="component-outlined" value={this.state.user.email} label="email"/>
                        </FormControl>
                        </Grid>
                        <Grid item>
                        <FormControl className={styles.formElement} variant="outlined">
                            <InputLabel htmlFor="component-outlined">Username</InputLabel>
                            <OutlinedInput id="component-outlined" value={this.state.user.username} label="Username"/>
                        </FormControl>
                        </Grid>
                        {additionalInfo ? (<Grid item>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.name} label="email"/>
                        </FormControl>
                        </Grid>) : null}
                        {additionalInfo ? (<Grid item>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Surname</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.surname} label="city"/>
                        </FormControl>
                        </Grid>) : null}
                        {additionalInfo ? (<Grid item>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Address</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.address} label="city"/>
                        </FormControl>
                        </Grid>) : null}
                        {additionalInfo ? (<Grid item>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.phone} label="phone"/>
                        </FormControl>
                        </Grid>) : null}
                        
                    </Grid>
                    </form>
                </ListGroup.Item>
                <br/>
                <h6>Upload images that will appear on your profile</h6>
                  <ImageUploadView /> 
                
                <br/>
                {this.renderSwitchButtons(this.state.isFreelancer, this.state.isCarOwner)}
                <br/>
                {this.state.isFreelancer ? ( 
                 this.state.isFreelancerEnabled ? (
                    <CarOwnerDetails cars={this.state.user.carOwnerData.cars} />
                    ) : (
                    <FreelancerDetails 
                        expertise={this.state.user.freelancerData.expertise} 
                        yearsOfExperience={this.state.user.freelancerData.rating}/>
                    )) : this.state.isCarOwner ? <CarOwnerDetails cars={this.state.user.carOwnerData.cars}/> : null}
                <br/>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            checked = {true}
                            // onChange={}
                            name="checkedB"
                            color="primary"
                        />
                    } label="I agree to receive newsletter emails from Car Companion"
                />
                <br/>
                <br/>
                <Button variant="contained" color= "primary" onChange={this.handleChange}>Save your changes</Button>
                <br/>
                <br/>

            </div>
        </ListGroup>
        </CardContent>
      </Card>
      </div>
      </Page>
    );
}
}
export default withRouter(FreelancerUserProfile);