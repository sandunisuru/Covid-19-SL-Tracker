import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

//Local Status Components
import TotalInfected_Local from './Elements/Local/TotalInfected'
import TotalUnderObservation_Local from './Elements/Local/TotalUnderObservation'
import TotalCured_Local from './Elements/Local/TotalCured'
import TotalDeaths_Local from './Elements/Local/TotalDeaths'

//Global Status Components
import TotalInfected_Global from './Elements/Global/TotalInfected'
import TotalNewCases_Global from './Elements/Global/TotalNewCases'
import TotalCured_Global from './Elements/Global/TotalCured'
import TotalDeaths_Global from './Elements/Global/TotalDeaths'
import Appbar from './Appbar'




class Home extends Component {


    interval = setInterval(() => {
        this.props.fetchData();
    }, 60000);

    componentWillMount() {
        this.props.fetchData();
    }


    render() {

        console.log(this.props.data)

        const useStyles = makeStyles(theme => ({
            root: {
                padding: theme.spacing(2),
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(0),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));


        return (

            <div className="App">
                <Appbar />
                <Grid container style={{ paddingTop: 5 }} spacing={1} >
                    <div style={{ padding: 10 }}>
                        <Typography variant="h5" gutterBottom>
                            Local Status
                        </Typography>
                    </div>

                    <Grid container spacing={2} item md={12}>

                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalInfected_Local local_cases={this.props.data.local_total_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalUnderObservation_Local under_observation={this.props.data.local_total_number_of_individuals_in_hospitals} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalCured_Local local_cured={this.props.data.local_recovered} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalDeaths_Local local_deaths={this.props.data.local_deaths} last_updated={this.props.data.update_date_time} />
                        </Grid>
                    </Grid>
                    <div style={{ padding: 10 }}>
                        <Typography variant="h5" gutterBottom>
                            Global Status
                        </Typography>
                    </div>
                    <Grid container spacing={2} item md={12}>


                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalNewCases_Global new_cases={this.props.data.global_new_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalInfected_Global total_infection={this.props.data.global_total_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalCured_Global total_cured={this.props.data.global_recovered} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalDeaths_Global total_deaths={this.props.data.global_deaths} last_updated={this.props.data.update_date_time} />
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={useStyles.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={useStyles.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={useStyles.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={useStyles.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={useStyles.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.prototypes = {
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}
const mapStatetoProps = state => ({
    data: state.data.data
})

export default connect(mapStatetoProps, { fetchData })(Home);