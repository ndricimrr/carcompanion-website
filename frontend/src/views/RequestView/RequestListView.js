import React, { Component } from "react";
import Page from "../../components/Page";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

class RequestListView extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(items) {
    return (
      <List component="nav" aria-label="main mailbox folders">
        {items.map((item) => {
          return (
            <ListItem
              button
              key={item.id}
              onClick={() => {
                this.props.history.push(`/requests/${item.id}`);
              }}
            >
              <ListItemIcon>
                {item.type === "purchase" ? (
                  <DriveEtaIcon />
                ) : (
                  <SupervisorAccountIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={item.content.concat(" " + item.id)} />
            </ListItem>
          );
        })}
      </List>
    );
  }

  render() {
    var mockRequest = [
      {
        id: "123",
        type: "inspection",
        date: "13.02.2020",
        content: "Hello, I am looking for an inspector",
        date_of_acceptance: "14.02.2020",
        urgency: 2,
      },
      {
        id: "456",
        type: "purchase",
        date: "16.02.2020",
        content: "Hello, I am looking for a new ferrari",
        date_of_acceptance: "14.02.2020",
        urgency: 3,
      },
      {
        id: "789",
        type: "purchase",
        date: "16.05.2020",
        content: "Hello, I am looking for a new vehicle",
        date_of_acceptance: "20.05.2020",
        urgency: 3,
      },
    ];
    console.log(mockRequest);
    return (
      <Page>
        <h3>Incoming Request:</h3>
        {this.renderList(mockRequest)}
        <h3>Sent Requests:</h3>
        {this.renderList(mockRequest)}
      </Page>
    );
  }
}

export default RequestListView;
