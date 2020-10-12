import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

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

function Flag({ className, local_cured, imageName  }) {
    const { root, title, media } = useStyles();

    return (
        <Card className={clsx(root, className)}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography
                            className={title}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                        </Typography>
                        <Typography variant="h3">{local_cured}</Typography>
                    </Grid>
                    <Grid item>
                        <CardMedia
                            component="img"
                            height="100"
                            className={media}
                            image={imageName}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Flag;