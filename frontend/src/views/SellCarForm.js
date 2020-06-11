import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SimpleSelect() {
    const classes = useStyles();
    const [brand, setBrand] = React.useState('');
    const [color, setColor] = React.useState('');
    const [model, setModel] = React.useState('');
    const [fuel, setFuel] = React.useState('');
  
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="brand-select-label">Brand</InputLabel>
          <Select
            labelId="brand-select-label"
            id="brand-simple-select"
            value={brand}
            onChange={setBrand(event.target.value)}
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
            value={color}
            onChange={setColor(event.target.value)}
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
            value={model}
            onChange={setModel(event.target.value)}
          >
            <MenuItem value={"Coupe"}>Coupe</MenuItem>
            <MenuItem value={"Sportback"}>Sportback</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"Convertible"}>Convertible</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
          </Select>
        </FormControl>
        </div>
    )
  }