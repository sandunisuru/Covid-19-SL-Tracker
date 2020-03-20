import { REFRESH_DATA, NEW_POST } from './types';

export const fetchData = () => dispatch => {
    console.log("fetching")
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

export const createPost = (postData) => dispatch => {
    console.log("acct")
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));

}