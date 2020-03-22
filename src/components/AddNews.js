import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addNews, addToLatest } from '../actions/newsActions'
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class AddNews extends Component {

    state = {
        news: "",
        open: false,
        close: false
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        let newsItem = {
            id: uuidv1(),
            text: this.state.news,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        this.props.addNews(newsItem)
        this.props.addToLatest(newsItem)
        this.setState({ news: "" })

        this.handleClick();
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    handleClick = () => {
        this.setState({ open: true });
    };



    render() {

        return (
            <div >
                <Grid container style={styles.root} spacing={3}>
                    <FormControl fullWidth >
                        <TextField
                            id="outlined-full-width"
                            label="Enter Your News"
                            style={{ margin: 8 }}
                            name="news"
                            placeholder="News text here"
                            helperText="This field is required to submit a news notification."
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={this.state.news}
                            onChange={this.onChange}
                        />


                    </FormControl>
                    <FormControl fullWidth >
                        <Button variant="contained" color="primary" onClick={this.onSubmit}>
                            Send News
                        </Button>
                    </FormControl>
                </Grid>

                <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                    <Alert severity="success" variant="filled">News Submitted!</Alert>
                </Snackbar>
            </div>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
        padding: 50
    }
}

AddNews.prototypes = {
    addNews: PropTypes.func.isRequired,
    addToLatest: PropTypes.func.isRequired
}

export default connect(null, { addNews, addToLatest })(AddNews);