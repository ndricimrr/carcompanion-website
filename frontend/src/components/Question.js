/*
 * Question components which keeps question data
 */
"use strict";

import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { ListItemAvatar, Avatar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        height: '17ch',
        width: '100ch',
        // maxWidth: '50ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
      margin: {
        margin: theme.spacing(1),
      },
}));

 const Question = (props) => {
    const classes = useStyles();
    const [questionData, setQuestionData] = useState({
        title: props.questn.title,
        areas: props.questn.areas,
        content: props.questn.content,
        date: props.questn.date,
        images: props.questn.images
    })

    return (
        //List elements of the list of questions
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar/>
              </ListItemAvatar>
            <ListItemText
          primary={questionData.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {questionData.areas}
              </Typography>
              <br/>
              {questionData.content}
              <br/>
            </React.Fragment>
          }
        />
        {/* Button wouls redirect to the actual question + answers */}
        <NavLink exact to={"/community/".concat(props.questn._id)} style={{ textDecoration: "none" }}>
          <Button variant="outlined" size="small" color="primary" className={classes.margin}>See question</Button>
        </NavLink>
        
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
 };

 export default Question;
