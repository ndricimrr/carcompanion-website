import React, { Component } from "react";
import Page from "../../components/Page";

class RequestContent extends Component {
  render() {
    let id = this.props.match.params.id;
    console.log(id);
    return (
      <Page>
        <h1>This is request with id: {id}</h1>
      </Page>
    );
  }
}

export default RequestContent;
