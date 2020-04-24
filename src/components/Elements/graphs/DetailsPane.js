import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

//Global Status Components
import TotalInfectedGlobal from '../Global/TotalInfected'
import TotalNewCasesGlobal from '../Global/TotalNewCases'
import TotalCuredGlobal from '../Global/TotalCured'
import TotalDeathsGlobal from '../Global/TotalDeaths'
import Flag from './Flag'

function DetailsPane(props) {

    console.log(props)
    return (
        <div>
            <Grid container spacing={2} item md={12}>
                
                <Grid item md={3} xs={12} spacing={2}>
                    {
                    props.details.countryInfo !== undefined?<Flag coutryName={props.details.country} imageName={props.details.countryInfo.flag} />:<Flag new_cases={props.details.todayCases} imageName="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg" />}
                    
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalInfectedGlobal total_infection={props.details.cases} />
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalCuredGlobal total_cured={props.details.recovered} />
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalDeathsGlobal total_deaths={props.details.deaths} />
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailsPane;