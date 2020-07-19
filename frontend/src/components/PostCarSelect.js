/*
 * This view will show PostCar Select options 
 */

// Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    width: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PostCarInput = (props) => {
  const classes = useStyles();
  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={val}
          onChange={props.onChange}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          {props.values.map((val, index) => (
            <MenuItem key={index} value={val.key}>
              {val.val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PostCarInput;
