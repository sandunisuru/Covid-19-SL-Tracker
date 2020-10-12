import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import { getDetailsByCountry, getHistoryByCountry } from '../../../actions/graphActions';
import DetailsPane from './DetailsPane';

class AllGraphs extends Component {

    state = {
        country: "Sri Lanka"
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, this.runGetDataFunctions);
    }

    runGetDataFunctions() {
        this.props.getDetailsByCountry(this.state.country);
        this.props.getHistoryByCountry(this.state.country);
    }

    render() {
        const { countries, details } = this.props;
        return (
            <Paper elevation={3}>
                <div style={{ padding: 25 }}>
                    <FormControl className={style.formControl} fullWidth>
                        <InputLabel htmlFor="age-native-simple">Select Country</InputLabel>
                        <Select
                            native
                            onChange={this.handleChange}
                            name="country"
                            fullWidth
                        >
                            <option aria-label="None" value="" />
                            {
                                countries.map((item) => (
                                    <option key={item.country} value={item.country}>{item.country}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <div style={{ marginTop: 10 }}>
                        <DetailsPane details={details} />
                    </div>
                </div>
            </Paper>
        );
    }
}

const style = {
    formControl: {
        width: '100%'
    }
}

const mapStatetoProps = state => ({
    countries: state.graph.countries,
    details: state.graph.details,
    history: state.graph.history
})

AllGraphs.prototypes = {
    getDetailsByCountry: PropTypes.func.isRequired,
    getHistoryByCountry: PropTypes.func.isRequired
}



export default connect(mapStatetoProps, { getDetailsByCountry, getHistoryByCountry })(AllGraphs);