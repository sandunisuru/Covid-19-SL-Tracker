import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import EventIcon from '@material-ui/icons/Event';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    content: {
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: 'red',
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    },
    difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    differenceIcon: {
        color: theme.palette.error.dark
    },
    differenceValue: {
        color: theme.palette.error.dark,
        marginRight: theme.spacing(1)
    }
}));

function TotalDeaths(props) {

    const { className } = props;

    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, className)}
        >
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            DEATHS
            </Typography>
                        <Typography variant="h3">{props.local_deaths}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <AirlineSeatFlatIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <div className={classes.difference}>
                    <EventIcon className={classes.differenceIcon} />

                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        Last Updated on {props.last_updated}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default TotalDeaths;