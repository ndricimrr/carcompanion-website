/*
 * This view will show freelancer in a grid view
 */

// Imports
import React, {Component} from "react";
import Freelancer from "../components/Freelancer";
import Grid from "@material-ui/core/Grid";
import styles from './FreelancerGridView.css'
import FreelancerService from '../services/FreelancerService'

class FreelanceGridView extends Component {

  // dummy data for freelancers !!!! to be taken from database
  /*var freelancers = [
    {
      image: "https://www.auto.edu/wp-content/uploads/ATI-May-7-734x550.png",
      bedge: "TOP RATED",
      name: "JOHN SMITH",
      role: "MECHANIC",
      inspections: "328",
      rating: "5",
    },
  ];*/
  constructor(props) {
        super(props);

        this.state = {
            loading: false,
            freelancers: []
        };
  }
  componentWillMount(){
        this.setState({
            loading: true
        });

        FreelancerService.getFreelancers().then((freelancers) => {
            this.setState({
                freelancers: [...freelancers],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        console.log(this.state.freelancers)
        return (
            <React.Fragment>
      <Grid container justify="center" spacing={4}>
        {this.state.freelancers.map((freelancer) => (
          <Grid key={freelancer.freelancerName} item>
            <Freelancer
              image={freelancer.image}
              bedge={freelancer.badge}
              name={freelancer.freelancerName}
              surname={freelancer.surname}
              role={freelancer.role}
              inspections={freelancer.inspections}
              rating={freelancer.rating}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
            
        );
    }
};

export default FreelanceGridView;
