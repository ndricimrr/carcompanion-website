/*
* This view will show freelancer in a grid view
*/

// Imports
import React from 'react';
import Freelancer from '../components/Freelancer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Component styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const FreelanceGridView = (props) => {

    const classes = useStyles();

    // dummy data for freelancers !!!! to be taken from database
    var freelancers = [
        {
            image: "https://www.auto.edu/wp-content/uploads/ATI-May-7-734x550.png",
            bedge: "TOP RATED",
            name: "JOHN SMITH",
            role: "MECHANIC",
            inspections: "328",
            rating: "5",
        },
        {
            image: "https://professional-mechanic.com/wp-content/uploads/2020/02/new-slider-img.jpg",
            bedge: "NEW",
            name: "MANUEL KRAUSE",
            role: "TIRE TECHNICIAN",
            inspections: "18",
            rating: "4",
        },
        {
            image: "https://www.careergirls.org/wp-content/uploads/2018/05/Automotive_Mechanic_1920x1080.jpg",
            bedge: "-30%",
            name: "MARIE SCHEDL",
            role: "MECHANIC",
            inspections: "108",
            rating: "4",
        },
        {
            image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555290065/shape/mentalfloss/istock-486895782.jpg",
            bedge: "",
            name: "SELIM AKSOY",
            role: "ELECTRICIAN EXPERT",
            inspections: "88",
            rating: "3",
        },
        {
            image: "https://miro.medium.com/max/6000/1*yYrKqnVE8khRe9qaeJ-heA.jpeg",
            bedge: "TOP RATED",
            name: "BLAKE SMITH",
            role: "MECHANIC",
            inspections: "188",
            rating: "5",
        },
    ]

    return(
        <React.Fragment>
            <Grid container justify="center" spacing={4}>
                {freelancers.map((freelancer) => (
                    <Grid key={freelancer.name} item>
                        <Freelancer 
                            image={freelancer.image}
                            bedge={freelancer.bedge}
                            name={freelancer.name}
                            role={freelancer.role}
                            inspections={freelancer.inspections}
                            rating={freelancer.rating}/>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default FreelanceGridView;