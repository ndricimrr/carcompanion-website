import React, { Component } from "react";
import mechanic from "../assets/mechanic1.png";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import { ListItem, ListItemIcon, Button } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomIcon from "@material-ui/icons/Room";
import BuildIcon from "@material-ui/icons/Build";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import styles from "./FreelancerDescriptionView.css";
import FreelancerService from "../services/FreelancerService";
import Page from "../components/Page";
import RequestService from "../services/RequestService";
import UserService from "../services/UserService";
import RequestDialog from "../components/RequestDialog";

class FreelancerDescriptionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      freelancer: null,
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentWillMount(props) {
    this.setState({
      loading: true,
    });
    let id = this.props.match.params.id;
    (async () => {
      try {
        let freelancer = await FreelancerService.getFreelancer(id);
        this.setState({
          freelancer: freelancer,
          loading: false,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }

  async sendRequest(request) {
    try {
      let request = {
        senderID: UserService.getCurrentUser().id,
        receiverID: this.props.match.params.id,
        type: "inspection",
        accepted: false,
        message: "Hello what's up",
        carMake: "mercedes",
      };
      let ret = await RequestService.createRequest(request);
      this.props.history.push("/requests");
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.loading) {
      return <p></p>;
    }

    return (
      <Page>
        {/* Image not loaded from freelancer card */}
        <img className={styles.imageStyle} src={mechanic} />
        <div className={styles.center}>
          <h3>
            {this.state.freelancer.name} {this.state.freelancer.surname}
          </h3>
          {/* <p>evetually we can add hier a bio / description in next sprints</p> */}
          <Rating name="rating" value={this.state.freelancer.rating} readOnly />
          <div className={styles.center}>
            <ListItem>
              <ListItemIcon>
                <WorkOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Expertise"
                secondary={this.state.freelancer.expertise}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText
                primary="Inspections"
                secondary={this.state.freelancer.inspections}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Telephone"
                secondary={this.state.freelancer.telephone}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="E-mail"
                secondary={this.state.freelancer.email}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText
                primary="City"
                secondary={this.state.freelancer.city}
              />
            </ListItem>
          </div>
          <center>
            <RequestDialog match={this.props.match} type={"inspection"} />
          </center>
        </div>
      </Page>
    );
  }
}
export default FreelancerDescriptionView;
