import React, { Component } from "react";
import MultipleSelect, { SimpleSelect } from "./SellCarForm";
import Page from "../components/Page";
import CustomizedSelects from "./SellCarForm";

export class SellAdvertiseView extends Component {
  render() {
    return (
      <Page>
        <CustomizedSelects title={"Sell Your Car!"} />
      </Page>
    );
  }
}