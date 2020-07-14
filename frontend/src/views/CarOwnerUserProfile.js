import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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



// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));
// let classes = useStyles()

class CarOwnerUserProfile extends Component {
    constructor(props) {
        super(props);
          this.state = {
            loading: false,
            user: null
          };
        }

    componentWillMount(props) {
        this.setState({
        loading: true,
        });
        (async () => {
            try {
                let user = await getCurrentUser();
                this.setState({
                    user: user,
                    loading: false,
                });
            } catch (err) {
                console.error(err);
            }
        })();
    }

    //redirect to sell/advertise page
    handleSell= () => {
        this.props.history.push("/sell-advertise")
    }

    // handle input field changes
    handleChange(evt) {
        const value = evt.target.value;
        console.log("Value", value);
    //   this.setState({
    //     [evt.target.name]: value,
    //   });
    }
    // classes = useStyles();
    // const [name, setName] = React.useState('Composed TextField'); 

    // const handleChange = (event) => {
    //     setName(event.target.value);
    //   };

    // const handleChangeCheck = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    // };

    render() {
 let user = {
     username: "michealmk20",
     password: "123456",
     name: "Michael",
     surname: "Mckinney",
     address: "Marienplatz 6, 80909 München",
     email: "michael@email.com",
     phone: "+12345669"
 }
    return (
        <div className={styles.container}> 
        <Card  >
            <CardContent>
            <ListGroup variant="flush">
                <div> 
                <ListGroup.Item>
                    {/* <img className={styles.imageStyle} src={mechanic}/> */}
                    <h2>Welcome {user.name} {user.surname}</h2>
                    <Divider variant="middle" />
                    <br/>
                    <h4>Log in data</h4>
                    <br/>
                    <form noValidate autoComplete="off">
                        <FormControl className={styles.formElement} variant="outlined">
                            <InputLabel htmlFor="component-outlined">Username</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.username} label="Username"/>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.password} label="Password"/>
                        </FormControl>
                    </form>
                </ListGroup.Item>
                <br/>
                <br/>
                <ListGroup.Item>
                    <h4>Contact details</h4>
                    <br/>
                    <form noValidate autoComplete="off">
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">email</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.email} label="emaillabel"/>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">address</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.address} label="addresslabel"/>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">phone</InputLabel>
                            <OutlinedInput id="component-outlined" value={user.phone} label="phonelabel"/>
                        </FormControl>
                    </form>
                </ListGroup.Item>
                <br/>
                <br/>  
                <ListGroupItem>
                    <h6>You wanna create and manage the digital profiles of your cars? Then take a tour in your Garage!</h6>
                    <Button variant="contained" color="primary">See my Garage</Button>
                    <br/>
                    <br/>
                    <h6>Your Garage still holds hidden treasures? Then put your car for sale with the best price!</h6>
                    <Button onClick={this.handleSell} variant="contained" color="secondary">sell your car</Button>
                    <br/>
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
                </ListGroupItem>
            </div>
        </ListGroup>
        </CardContent>
      </Card>
      </div>
    );
}
}
export default CarOwnerUserProfile;