import React from 'react';
import { Chip, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

export default function About() {

    const handleOnClick = (url) => {
        window.open(url, "_blank")
    }

    const getTechnologies = () => {
        return [
            {
                label: "ReactJS",
                url: "https://github.com/facebook/react",
                icon: <GitHubIcon />
            },
            {
                label: "react-router",
                url: "https://github.com/ReactTraining/react-router",
                icon: <GitHubIcon />
            },
            {
                label: "firebase",
                url: "https://github.com/firebase/firebase-js-sdk",
                icon: <GitHubIcon />
            },
            {
                label: "moment",
                url: "https://github.com/moment/moment/",
                icon: <GitHubIcon />
            },
            {
                label: "redux",
                url: "https://github.com/reduxjs",
                icon: <GitHubIcon />
            },
            {
                label: "react-redux",
                url: "https://github.com/reduxjs/react-redux",
                icon: <GitHubIcon />
            },
            {
                label: "redux-thunk",
                url: "https://github.com/reduxjs/redux-thunk",
                icon: <GitHubIcon />
            },
            {
                label: "uuid",
                url: "https://github.com/uuidjs/uuid",
                icon: <GitHubIcon />
            },
            {
                label: "Health Promotion Bureau, Sri Lanka Official API",
                url: "https://hpb.health.gov.lk/en/api-documentation",
                icon: <LinkIcon />
            },
            {
                label: "Disease.sh API",
                url: "https://corona.lmao.ninja/docs/",
                icon: <LinkIcon />
            }
        ]
    }
    return (
        <Grid container style={{ width: 'inherit', padding: 10 }}>
            <Grid container xs={12}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6} >
                    <div style={{ paddingTop: '10%', textAlign: 'center' }}>
                        <Typography variant="h2">
                            COVID19 Tracker
                        </Typography>
                        <Typography variant="body1">
                            Hello, I'm Sandun and Software Developer from Sri Lanka.
                            This small project was developed by during pandemic season to get rid from bored situation.
                            So you can take any code snippets from here. I have no worries about that.
                            If you found this awesome, you can find the source for this project from Github below.
                            If you love this give it a Star.
                        </Typography>
                    </div>
                    <div style={{ paddingTop: '10%' }}>
                        <Typography variant="body1">
                            <List component="nav" aria-label="contacts">
                                <ListItem button onClick={() => handleOnClick("https://github.com/Sandun-Isuru-Niraj/Covid-19-SL-Tracker")}>
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Github for the Source Code" />
                                </ListItem>
                                <ListItem button onClick={() => handleOnClick("https://www.facebook.com/sandun.isuru.niraj/")}>
                                    <ListItemIcon>
                                        <FacebookIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="I'm on Facebook" />
                                </ListItem>
                                <ListItem button onClick={() => handleOnClick("https://www.linkedin.com/in/sandun-isuru-niraj/")}>
                                    <ListItemIcon>
                                        <LinkedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="I'm on Linkedin" />
                                </ListItem>
                            </List>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Sources that used to build this awesome project</Typography>
                        {getTechnologies().map(tech => (
                            <Chip
                            icon={tech.icon}
                            label={tech.label}
                            clickable
                            color="primary"
                            variant="outlined"
                            style={{ margin: 5 }}
                            onClick={() => handleOnClick(tech.url)}
                        />
                        ))}
                        
                    </div>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    )
} 
