import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button";

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: 500,
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "#b6cef2",
    border: '1px solid #ced4da',
    fontSize: 25,
    padding: '10px 26px 10px 300px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },

  buttons: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-between",
  },

  button: {
    padding: 8,
    margin: 50,
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [Brand, setBrand] = React.useState('');
  const handleChange = (event) => {
    setBrand(event.target.value);
    

  };
  return (
    <div>
      <br />
      <h1><center>Sell your car!</center></h1>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Brand</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Brand}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={10}>BMW</MenuItem>
          <MenuItem value={20}>Volkswagen</MenuItem>
          <MenuItem value={30}>Mercedes Benz</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Color</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Brand}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={10}>Red</MenuItem>
          <MenuItem value={20}>Blue</MenuItem>
          <MenuItem value={30}>Yellow</MenuItem>
          <MenuItem value={40}>Black</MenuItem>
          <MenuItem value={50}>White</MenuItem>
          <MenuItem value={60}>Orange</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Type of Car</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Brand}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={10}>Coupe</MenuItem>
          <MenuItem value={20}>SUV</MenuItem>
          <MenuItem value={30}>Convertible</MenuItem>
          <MenuItem value={40}>Sedan</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Fuel</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Brand}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={10}>Diesel</MenuItem>
          <MenuItem value={20}>Elektro</MenuItem>
          <MenuItem value={30}>Gas</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Kilometers</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Price</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>

      <div className={classes.buttons}>
        <center>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Post
          </Button>
        </center>
      </div>

      <div className={classes.buttons}>
        <left>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
          >  
            Advanced Options
          </Button>
        </left>
      </div>


    </div>
    
    
  );
}