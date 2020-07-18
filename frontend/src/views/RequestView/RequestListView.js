import React, { Component } from "react";
import Page from "../../components/Page";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import RequestService from "../../services/RequestService";
import UserService from "../../services/UserService";
import Accordion from "@material-ui/core/Accordion";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

class RequestListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: null,
    };
    this.renderList = this.renderList.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
  }

  componentWillMount(props) {
    (async () => {
      try {
        let requests = await RequestService.getMyRequests();
        this.setState({
          requests: requests,
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }

  handleDeleteRequest(id){
      RequestService.deleteRequest(id);
      this.props.history.go(0);
  }

  renderList(items) {
    if (items == undefined || items.length == 0 ) {
      return (
        <center>
          <h1>No Elements</h1>
        </center>
      );
    }
    return (
      <List component="nav" aria-label="main mailbox folders">
        {items.map((item) => {
          return (
            // <ListItem
            //   button
            //   key={item._id}
            //   // onClick={() => {
            //   //   this.props.history.push(`/requests/${item._id}`);
            //   // }}
            // >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  {item.type === "purchase" ? (
                    <DriveEtaIcon />
                  ) : (
                    <SupervisorAccountIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.message.concat(" " + item._id)} />
                <ListItemIcon>
                  {item.type === "purchase" ? (
                    <DriveEtaIcon />
                  ) : (
                    <CheckCircleIcon style={{ color: "green" }} />
                  )}
                </ListItemIcon>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{display:"flex", flex: "1", flexDirection: "row", justifyContent: "space-around"}}>
                  <div>
                  User has sent you a request. 
                  </div>
                  <Button variant="contained" size="small" color="primary" onClick={() => {this.handleDeleteRequest(item._id)}}>
                    <CheckIcon  />
                    Accept
                  </Button>
                  <Button variant="contained" size="small" color="secondary" onClick={() => {this.handleDeleteRequest(item._id)}}>
                    <ClearIcon/>
                    Decline
                  </Button>
                  <Button variant="contained" size="small" color="secondary" onClick={() => {this.handleDeleteRequest(item._id)}}>
                    <DeleteIcon  />
                    Delete Request
                  </Button>
                </div>

              </AccordionDetails>
            </Accordion>
            // </ListItem>
          );
        })}
      </List>
    );
  }

  render() {
    console.log(this.state.requests);
    if (this.state.requests == null) {
      return (
        <center>
          <h2>Loading</h2>
        </center>
      );
    }
    return (
      <Page>
        <h3>Incoming Request:</h3>
        {this.renderList(this.state.requests.received)}
        <h3>Sent Requests:</h3>
        {this.renderList(this.state.requests.sent)}
      </Page>
    );
  }
}

export default RequestListView;
