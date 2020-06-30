import React, { Component } from "react";
import Page from "../components/Page";
import styles from "./HomePage.css";
// import { Grid } from "@material-ui/core";
import { Grid, Cell } from "react-mdl"
import logo from "../assets/logo.png";


export class HomePage extends Component {
  render() {
    return (
      <Page>
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className={styles.landingGrid}>
          <Cell col={12} > </Cell>
            {/* <img width={100} src={logo} alt="logo" /> */}
            <div >
              <br/>
              <br/>
              <hr className={styles.bannerFirstLine}></hr>
              <br/>
              <h1 className={styles.bannerTitle}>Welcome to Car Companion</h1>
              <h1 className={styles.bannerSubtitle}> A new way of car ownership.</h1>
              <hr className={styles.bannerSecondLine}></hr>
            </div>
        </Grid>
      </div>
      </Page>

      // <Page>
      //    {/* Welcome Header */}
      //    <header class="masthead">
      //        <div className={styles.container}>
      //            <div class="masthead-subheading">Welcome To Our Studio!</div>
      //            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
      //            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      //        </div>
      //    </header>
      //    <h1
      //     style={{
      //       display: "flex",
      //       justifyContent: "center",
      //       alignItems: "center",
      //       marginTop: "200px",
      //     }}
      //   >
      //     Welcome to Car Companion HomePage
      //   </h1>
      // </Page>
    );
  }
}
