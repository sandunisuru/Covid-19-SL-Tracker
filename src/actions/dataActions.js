import { REFRESH_DATA } from './types';

export const fetchData = () => dispatch => {
    fetch('https://hpb.health.gov.lk/api/get-current-statistical', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }})
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: REFRESH_DATA,
                payload: data.data
            }))

};
