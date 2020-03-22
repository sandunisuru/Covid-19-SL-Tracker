import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { fetchNews } from '../../../actions/newsActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import NewsItem from './NewsItem'

class NewsFeed extends Component {

    news = [
        {
            id: 0,
            text: "Hello World 1",
            date: "2020-03-02"
        },
        {
            id: 1,
            text: "Hello World 2",
            date: "2020-03-05"
        },
        {
            id: 2,
            text: "Hello World 3",
            date: "2020-03-07"
        },
        {
            id: 3,
            text: "Hello World 4",
            date: "2020-03-12"
        }
    ]

    componentDidMount() {
        this.props.fetchNews();
    }

    renderNews() {


        const allNews = _.map(this.props.news, (value, key) => {
          
            return <NewsItem key={key} news={value} />;
        })
        

        

        if (!_.isEmpty(allNews)) {

            if(allNews.length > 10){
                let limitedArray = allNews.splice(-10, 9e9); 
                let allNewsAlerts = limitedArray.reverse();
                return allNewsAlerts;
            }else{
                let allNewsAlerts = allNews.reverse();
                return allNewsAlerts;
            }
            
        }
        return (
            <div>
                <h4>No any Latest News!</h4>
            </div>
        );
    }

    render() {

        return (
            <Paper elevation={3}>
                <div style={{ padding: 5 }}>

                    {
                        this.renderNews()
                    }
                </div>
            </Paper>
        );
    }
}

NewsFeed.prototypes = {
    fetchNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
}
const mapStatetoProps = state => ({
    news: state.news.data
})

export default connect(mapStatetoProps, { fetchNews })(NewsFeed);