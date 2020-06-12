import React, { Component } from "react";
import Page from "../components/Page";

export class HomePage extends Component {
  render() {
    return (
      <Page>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
        >
          Welcome to Car Companion HomePage
        </h1>
      </Page>
    );
  }
}
