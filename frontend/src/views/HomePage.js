import React, { Component } from "react";
import Page from "../components/Page";
import styles from "./HomePage.css";
// import { Grid } from "@material-ui/core";
import { Grid, Cell } from "react-mdl";
import findCar from "../assets/findCar.png";
import inspection from "../assets/inspection.png";
import findDreamCar from "../assets/findDreamCar.jpg"
import freeInspection from "../assets/freeInspection.jpg"
import cheapRepair from "../assets/CheapRepair.jpg"
import carCommunity from "../assets/carCommunity.jpg"




export class HomePage extends Component {
  render() {
    return (
      <Page>
        <header className={styles.masthead}>
          <div className={styles.container}>
            <div className={styles.mastheadHeading}> Welcome to car companion!</div>
            <div className={styles.mastheadSubheading}> A new way of car ownership </div>
          </div>
        </header>

        <section style ={{padding: "6rem 0"}} id="services">
          <div className={styles.container}>
            <div className={styles.textCenter}>
              <h2 className={styles.titleH2}>Services</h2>
              <h3 className={styles.titleH3}>We accompany you during your whole journey of car ownership</h3>
            </div>
            <div className={styles.rowCenterText}>
              <div className={styles.column}>
                  <img className={styles.imgFormat} src={findDreamCar}/>
                  <div className={styles.centeredTextOnImg}>1. Find your dream car</div>
                  <div className={styles.smallTextOnImg}>A user friendly and intelligent search engine for the car that best suits your needs</div>
              </div>
              <div className={styles.column}>
                  <img className={styles.imgFormat} src={freeInspection}/>
                  <div className={styles.centeredTextOnImg}>2. Get free expert inspection</div>
                  <div className={styles.smallTextOnImg}>We match you with experts that help you with inspection when buying your dream car</div>
              </div>
              <div className={styles.column}>
                  <img className={styles.imgFormat} src={cheapRepair}/>
                  <div className={styles.centeredTextOnImg}>3. Convenient maintenance & repair</div>
                  <div className={styles.smallTextOnImg}>We match you with freelance mechanics in your neighborhood for car maintenance and repair</div>
              </div>
              <div className={styles.column}>
                  <img className={styles.imgFormat} src={carCommunity}/>
                  <div className={styles.centeredTextOnImg}>4. Be part of a great community</div>
                  <div className={styles.smallTextOnImg}>A community that relies car experts, enthusiasts and owners - the Stackoverflow for cars.</div>
              </div>

            </div>
          </div>
        </section>
        <button>Start Exploring our services</button>
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
      //2nd versuch:
      //<div style={{width: "100%", margin: "auto"}}>
  //     <Grid className={styles.landingGrid}>
  //     <Cell col={12} > </Cell>
  //       {/* <img width={100} src={logo} alt="logo" /> */}
  //       <div>
  //         <br/>
  //         <br/>
  //         <br/>
  //         <hr className={styles.bannerFirstLine}></hr>
  //         <br/>
  //         <h1 className={styles.bannerTitle}>Welcome to Car Companion</h1>
  //         <h1 className={styles.bannerSubtitle}> A new way of car ownership.</h1>
  //         <hr className={styles.bannerSecondLine}></hr>
  //         <br/>
  //         <br/>
  //         <br/>
  //         <br/>
  //         <br/>
  //       </div>
    
  //   <div className={styles.container}>
  //     <div style={{textAlign: "center"}}>
  //       <h2 className={styles.titleH2}>Your benefits</h2>
  //       <h3 className={styles.titleH3}>We bundle all the services around your car and accompany you during the whole journey of car ownership.</h3>
  //     </div>
  //     <div className={styles.row}>
  //       <div className={styles.column}>
  //         <div className={styles.benefit}> 
  //           <img className={styles.benefitImg} src={findCar} alt="findCar"/>
  //           <h4>Find your dream car</h4>
  //           <p style={{color: "#6c757d"}}>User friendly and intelligent search engine to find the best car that suits your needs.</p>
  //         </div>
  //         <div className={styles.benefit}> 
  //           <img className={styles.benefitImg} src={inspection} alt="inspection"/>
  //           <h4>Find your dream car</h4>
  //           <p style={{color: "#6c757d"}}>User friendly and intelligent search engine to find the best car that suits your needs.</p>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  //   </Grid>
  // </div>
    );
  }
}
