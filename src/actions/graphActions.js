import { GET_ALL_COUNTRIES, GET_DETAILS_BY_COUNTRY, GET_HISTORY_BY_COUNTRY } from './types';

export const getAllCountries = () => dispatch => {
    fetch('https://corona.lmao.ninja/v2/countries?sort=cases', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }})
        .then(res => res.json())
        .then(data =>{

            console.log(data)
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        })
};

export const getDetailsByCountry = (country) => dispatch => {
    fetch('https://corona.lmao.ninja/v2/countries/'+ country, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }})
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: GET_DETAILS_BY_COUNTRY,
                payload: data
            }))

};

export const getHistoryByCountry = (country) => dispatch => {
    fetch('https://corona.lmao.ninja/v2/historical/'+ country, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }})
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: GET_HISTORY_BY_COUNTRY,
                payload: data
            }))

};
