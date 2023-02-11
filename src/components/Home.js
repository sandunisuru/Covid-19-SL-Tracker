import React, { Component } from 'react';
import '../App/App.css';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions'
import { readLatest } from '../actions/newsActions';
//import { getAllCountries } from '../actions/graphActions';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

//NewsFeed Import
import NewsFeed from './Elements/News/NewsFeed'


class Home extends Component {

    interval = setInterval(() => {
        this.props.fetchData();
    }, 300000);

    componentDidMount() {
        
        this.props.fetchData();
        this.props.readLatest();
    }


    render() {

        return (

            <div className="App">
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
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={4} xs={12} spacing={2}>
                            <div style={{ padding: 10 }}>
                                <Typography variant="h5" gutterBottom>
                                    Latest News Headlines
                                </Typography>
                            </div>
                            
                            <NewsFeed />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={12} xs={12} spacing={2}>
                            <div style={{ padding: 10, textAlign: 'center' }}>
                                <Typography variant="h6" gutterBottom>
                                    Made with <FavoriteIcon color="error"/> by Sandun
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.prototypes = {
    fetchData: PropTypes.func.isRequired,
    readLatest: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}
const mapStatetoProps = state => ({
    data: state.data.data,
    news: state.news.data,
    latest: state.news.latest
})

export default connect(mapStatetoProps, { fetchData, readLatest })(Home);