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
  // Contructor
  constructor(props) {
        super(props);

        this.state = {
            loading: false,
            freelancers: []
        };
  }

  // Load data
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

  // Render
  render() {
    if (this.state.loading) {
        return (<h2>Loading...</h2>);
    }
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={4}>
          {this.state.freelancers.map((freelancer) => (
            <Grid key={freelancer.freelancerName} item>
              <Freelancer
                freelance={freelancer}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment> 
    );
  }
};

export default FreelanceGridView;
