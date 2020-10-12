import React from 'react';
import { Grid } from '@material-ui/core';

//Global Status Components
import TotalInfectedGlobal from '../Global/TotalInfected'
import TotalCuredGlobal from '../Global/TotalCured'
import TotalDeathsGlobal from '../Global/TotalDeaths'
import Flag from './Flag'

const SCREENSHOT = 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg';

function DetailsPane({ details }) {
    // console.log(props)
    const countryInfo = details.countryInfo === undefined
        ? <Flag new_cases={details.todayCases} imageName={SCREENSHOT} />
        : <Flag coutryName={details.country} imageName={details.countryInfo.flag} />;
    return (
        <div>
            <Grid container spacing={2} item md={12}>
                <Grid item md={3} xs={12} spacing={2}>
                    { countryInfo }
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalInfectedGlobal total_infection={details.cases} />
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalCuredGlobal total_cured={details.recovered} />
                </Grid>
                <Grid item md={3} xs={12} spacing={2}>
                    <TotalDeathsGlobal total_deaths={details.deaths} />
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailsPane;