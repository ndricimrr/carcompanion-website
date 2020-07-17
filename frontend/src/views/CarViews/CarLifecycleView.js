import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PersonIcon from '@material-ui/icons/Person';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import DiscFullIcon from '@material-ui/icons/DiscFull';
import BuildIcon from '@material-ui/icons/Build';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

class CarLifecycleView extends Component {
    
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <div style={{padding: "20px"}}>
                    <h2>My Car History</h2>
                </div>

                <div style={{marginLeft:"10%",
                 marginRight:"10%",
                justifyContent: "center", 
                justifyItems: "center" }}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h6">Technical car information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <ChromeReaderModeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Contruction year" secondary="2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <ReceiptIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Bought on" secondary="10.05.2019" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <DriveEtaIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Current mileage" secondary="100.000 km" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Number of previous owners" secondary="2 owners" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <LocalGasStationIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Fuel type" secondary="Gasoline" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h6">Past inspections and repairs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <EmojiObjectsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Lights inspection - 01.08.2019" secondary="Right headlight bulb was changed" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <BuildIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="General car inspection - 09.12.2020" secondary="Motor, exhaust and safety features checks" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <InvertColorsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Fluid inspection - 10.02.2020" secondary="Engine oil and brake fluid were changed at 98.000 Km" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <DiscFullIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Brake and tire inspection - 01.04.2020" secondary="Summer tires were attached and brakes inspected" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h6">Reminders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <NotificationsActiveIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="TÜV expires on 10.09.2020" secondary="Bring your car for inspection and don't forget the TÜV renewal" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <NotificationsActiveIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Winter tires attachment on 01.10.2020" secondary="Don't forget to change the summer tires" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <NotificationsActiveIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Timing chain should be changed at 120.000 km" secondary="Remember to book an appointment early and look for an alternative way of transport for few days" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
    
            
      
    
        );
    }
    
}
export default CarLifecycleView;