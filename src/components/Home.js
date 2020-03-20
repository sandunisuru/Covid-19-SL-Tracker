import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

//Local Status Components
import TotalInfectedLocal from './Elements/Local/TotalInfected'
import TotalUnderObservationLocal from './Elements/Local/TotalUnderObservation'
import TotalCuredLocal from './Elements/Local/TotalCured'
import TotalDeathsLocal from './Elements/Local/TotalDeaths'

//Global Status Components
import TotalInfectedGlobal from './Elements/Global/TotalInfected'
import TotalNewCasesGlobal from './Elements/Global/TotalNewCases'
import TotalCuredGlobal from './Elements/Global/TotalCured'
import TotalDeathsGlobal from './Elements/Global/TotalDeaths'
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

        // const useStyles = makeStyles(theme => ({
        //     root: {
        //         padding: theme.spacing(2),
        //         flexGrow: 1,
        //     },
        //     paper: {
        //         padding: theme.spacing(0),
        //         textAlign: 'center',
        //         color: theme.palette.text.secondary,
        //     },
        // }));


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
                            <TotalInfectedLocal local_cases={this.props.data.local_total_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalUnderObservationLocal under_observation={this.props.data.local_total_number_of_individuals_in_hospitals} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalCuredLocal local_cured={this.props.data.local_recovered} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalDeathsLocal local_deaths={this.props.data.local_deaths} last_updated={this.props.data.update_date_time} />
                        </Grid>
                    </Grid>
                    <div style={{ padding: 10 }}>
                        <Typography variant="h5" gutterBottom>
                            Global Status
                        </Typography>
                    </div>
                    <Grid container spacing={2} item md={12}>


                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalNewCasesGlobal new_cases={this.props.data.global_new_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalInfectedGlobal total_infection={this.props.data.global_total_cases} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalCuredGlobal total_cured={this.props.data.global_recovered} last_updated={this.props.data.update_date_time} />
                        </Grid>
                        <Grid item md={3} xs={12} spacing={2}>
                            <TotalDeathsGlobal total_deaths={this.props.data.global_deaths} last_updated={this.props.data.update_date_time} />
                        </Grid>
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