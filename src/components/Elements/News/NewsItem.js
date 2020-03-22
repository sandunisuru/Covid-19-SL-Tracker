import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    singleCard: {
        height: '100%',
        margin: 5
    },
    itemDateTime: {
        fontWeight: 700
    }
}));

function NewsItem(props) {

    const classes = useStyles();

    return (
        <Card
            className={classes.singleCard}
        >
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.itemDateTime}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            {props.news.date}
            </Typography>
                        <Typography variant="h5">{props.news.text}</Typography>
                    </Grid>

                </Grid>
                <div >

                </div>
            </CardContent>
        </Card>
    );
}

export default NewsItem;