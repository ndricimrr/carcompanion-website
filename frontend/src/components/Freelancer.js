/*
* Freelancer components which keeps Freelancer data
*/
"use strict";

import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';

import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 250,
    zIndex: 1,  
    position: 'relative'
  },
  badge: {
      zIndex:10, 
      position: 'absolute',
      backgroundColor: "red",
      color: "white",
      padding: 5,
      borderRadius: '5px!important'
  },
  name: {
      color: "black",
      fontWeight: "bold",
      fontSize: 20 
  },
  lightText: {
      color: "gray"
  },
  numbers: {
      color: "#3f51b5",
      fontWeight: "bold",
      fontSize: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function Freelancer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var title = "TOP RATED"  
  return (
      
    <Card className={classes.root}>
    <div className={classes.badge}>TOP RATED</div>
      <CardMedia
        className={classes.media}
        image="https://www.auto.edu/wp-content/uploads/ATI-May-7-734x550.png"
      />
      <CardContent>
      <center>
        <div className={classes.lightText}>
          MECHANIC
        </div>
        <div className={classes.name}>
          JOHN SMITH
        </div>
        <div className={classes.numbers}>
          328
        </div>
        <div className={classes.lightText}>
          INSPECTIONS
        </div>
        <div>
          <StarIcon color="primary"/>
          <StarIcon color="primary"/>
          <StarIcon color="primary"/>
          <StarIcon color="primary"/>
          <StarIcon color="primary"/>
        </div>
        </center>
      </CardContent>
    </Card>
  );
}

export default Freelancer;