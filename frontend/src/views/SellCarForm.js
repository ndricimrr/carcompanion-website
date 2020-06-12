import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import classes from "./SellCarForm.css";

export class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      color: "",
      model: "",
      fuel: "",
    };
  }
  render() {
    // const { classes } = useStyles();
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <h1>{this.props.title}</h1>
        <FormControl className={classes.formControl}>
          <InputLabel id="brand-select-label">Select your Brand</InputLabel>
          <Select
            labelId="brand-select-label"
            id="brand-simple-select"
            value={this.state.brand}
            onChange={(event) => this.setState({ brand: event.target.value })}
          >
            <MenuItem value={"Mercedes"}>Ten</MenuItem>
            <MenuItem value={"BMW"}>BMW</MenuItem>
            <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="color-select-label">Brand</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-simple-select"
            value={this.state.color}
            onChange={(event) => this.setState({ color: event.target.value })}
          >
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
            <MenuItem value={"Black"}>Black</MenuItem>
            <MenuItem value={"White"}>White</MenuItem>
            <MenuItem value={"Green"}>Green</MenuItem>
            <MenuItem value={"Orange"}>Orange</MenuItem>
            <MenuItem value={"Grey"}>Grey</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="model-select-label">Brand</InputLabel>
          <Select
            labelId="model-select-label"
            id="model-simple-select"
            value={this.state.model}
            onChange={(event) => this.setState({ model: event.target.value })}
          >
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Sportback"}>Sportback</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="model-select-label">Brand</InputLabel>
          <Select
            labelId="model-select-label"
            id="model-simple-select"
            value={this.state.model}
            onChange={(event) => this.setState({ model: event.target.value })}
          >
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Sportback"}>Sportback</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="model-select-label">Brand</InputLabel>
          <Select
            labelId="model-select-label"
            id="model-simple-select"
            value={this.state.model}
            onChange={(event) => this.setState({ model: event.target.value })}
          >
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Sportback"}>Sportback</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="model-select-label">Brand</InputLabel>
          <Select
            labelId="model-select-label"
            id="model-simple-select"
            value={this.state.model}
            onChange={(event) => this.setState({ model: event.target.value })}
          >
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Sportback"}>Sportback</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">
          Post
        </Button>
      </div>
    );
  }
}
