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
        let carHistory = {
            technicalInfo: [
                [<ChromeReaderModeIcon/>, "Contruction year", "2014"],
                [<ReceiptIcon/>, "Bought on", "10.05.2019"],
                [<DriveEtaIcon/>, "Current mileage", "100.000 km"],
                [<PersonIcon/>, "Number of previous owners", "2 owners"],
                [<LocalGasStationIcon/>, "Fuel type", "Gasoline"],
        ],
        pastRepairs: [
            [<DiscFullIcon/>, "Brake and tire inspection - 01.04.2020", "Summer tires were attached and brakes inspected"],
            [<InvertColorsIcon/>, "Fluid inspection - 10.02.2020", "Engine oil and brake fluid were changed at 98.000 Km"],
            [<BuildIcon/>, "General car inspection - 09.12.2020", "Motor, exhaust and safety features checks"],
            [<EmojiObjectsIcon/>, "Lights inspection - 01.08.2019", "Right headlight bulb was changed"],
        ],
        reminders: [
            ["TÜV expires on 10.09.2020", "Bring your car for inspection and don't forget the TÜV renewal"],
            ["Winter tires attachment on 01.10.2020", "Don't forget to change the summer tires"],
            ["Timing chain should be changed at 120.000 km", "Remember to book an appointment early and look for an alternative way of transport for few days"]
        ]
        }
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
                            <div> 
                            {carHistory.technicalInfo.map( (item) => { return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar> {item[0]} </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item[1]} secondary={item[2]} />
                            </ListItem>
                            )}
                            )}
                            </div>
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
                        <div> 
                            {carHistory.pastRepairs.map( (item) => { return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar> {item[0]} </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item[1]} secondary={item[2]} />
                            </ListItem>
                            )}
                            )}
                        </div>
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
                        <div> 
                            {carHistory.reminders.map( (item) => { return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar> <NotificationsActiveIcon /> </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item[0]} secondary={item[1]} />
                            </ListItem>
                            )}
                            )}
                        </div>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
        );
    }
}
export default CarLifecycleView;