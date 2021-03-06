/*
 * This view will show find a car  page
 */

// Imports
import React from "react";
import FindCarGridView from "./FindCarGridView";
import FindCarSpecificationView from "./FindCarSpecificationView";
import styles from "./FreelancersPageView.css";
import Page from "../components/Page";
import CarService from "../services/CarService";

export class FindCarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      cars: [],
      specs: {
        make: "",
        model: "",
        year: 0,
        mileageFrom: 0,
        mileageTo: 0,
        priceFrom: 0,
        priceTo: 0
      },
      filteredCars: [],
      specsSet: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

    // handle input field changes
  async handleChange(evt) {
    await this.setState({
      specsSet: false
    })
    const value = evt.target.value;
    var oldSpecs = JSON.parse(JSON.stringify(this.state.specs))
    oldSpecs[evt.target.name] = evt.target.value
    var newSpecs = oldSpecs
    await this.setState({
      specs: newSpecs
    });
    var oldCars = JSON.parse(JSON.stringify(this.state.cars))
    if (this.state.specs.make != "")
      oldCars = oldCars.filter((car) => car.make == this.state.specs.make)
    if (this.state.specs.model != "")
      oldCars = oldCars.filter((car) => car.model == this.state.specs.model)
    if (this.state.specs.year != 0)
      oldCars = oldCars.filter((car) => car.year <= this.state.specs.year)
    if (this.state.specs.mileageFrom != 0)
      oldCars = oldCars.filter((car) => this.state.specs.mileageFrom <= car.mileage)
    if (this.state.specs.mileageTo != 0)
      oldCars = oldCars.filter((car) => this.state.specs.mileageTo >= car.mileage)
    if (this.state.specs.priceFrom != 0)
      oldCars = oldCars.filter((car) => this.state.specs.priceFrom <= car.price)  
    if (this.state.specs.priceTo != 0)
      oldCars = oldCars.filter((car) => car.price <= this.state.specs.priceTo)
    await this.setState({
      filteredCars: oldCars
    });
    await this.setState({
      specsSet: this.state.specs.make != "" 
                   || this.state.specs.model != "" 
                   || this.state.specs.year != 0 
                   || this.state.specs.mileageFrom != 0
                   || this.state.specs.mileageTo != 0 
                   || this.state.specs.priceFrom != 0
                   || this.state.specs.priceTo != 0
    })
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    CarService.getCars()
      .then((cars) => {
        this.setState({
          cars: [...cars],
          loading: false,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  render() {
    if (this.state.loading == true) {
      return <h2>Loading Cars...</h2>;
    }
    return (
      <Page>
        {}
        <div className={styles.container}>
          <FindCarSpecificationView onChange={this.handleChange} values={this.state.specs}/>
          <FindCarGridView cars={this.state.cars} filteredCars={this.state.filteredCars} filtersSet={this.state.specsSet}/>
        </div>
      </Page>
    );
  }
}
