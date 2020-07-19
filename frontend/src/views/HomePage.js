import React, { Component } from "react";
import Page from "../components/Page";
import styles from "./HomePage.css";
import Grid from "@material-ui/core/Grid";
import findDreamCar from "../assets/findDreamCar.jpg";
import freeInspection from "../assets/freeInspection.jpg";
import cheapRepair from "../assets/CheapRepair.jpg";
import carCommunity from "../assets/carCommunity.jpg";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';



export class HomePage extends Component {
  render() {
    let services = [
      [findDreamCar, "Find your dream car", "A user friendly and intelligent search engine for the car that best suits your needs"],
      [freeInspection, "Free expert inspection", "We match you with experts that help you with inspection when buying your dream car"],
      [cheapRepair, "Convenient car maintenance & repair", "We match you with freelance mechanics in your neighborhood for car maintenance and repair"],
      [carCommunity, "Be part of a great community", "A community that relies car experts, enthusiasts and owners - the Stackoverflow for cars."],
    ]
    return (
      <Page>
        <header className={styles.masthead}>
          <div className={styles.container}>
            <div className={styles.mastheadHeading}>
              Welcome to car companion!
            </div>
            <div className={styles.mastheadSubheading}>
            We accompany you during your whole journey of car ownership
            </div>
          </div>
        </header>

        <section style={{ padding: "20px 0" }} id="services">
            <div style={{display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden'}}>
              <Grid container justify="center" spacing={4} className={styles.GridContainer}>
                {
                  services.map( (item) => (
                    <Grid key={item[1]} item className={styles.GridItem}>
                      <Card style={{height:'200', marginTop:'30px'}}>
                        <CardMedia
                        component="img"
                        height="200"
                        image={item[0]}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item[1]}
                          </Typography>
                          <Typography variant="body" color="textSecondary" component="p">
                            {item[2]}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>)
                  )
                }
              </Grid>
            </div>
        </section>
      </Page>
    );
  }
}