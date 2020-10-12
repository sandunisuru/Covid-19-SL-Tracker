import { FETCH_LATEST_NEWS, READ_LATEST } from './types';
import { newsRef, latestRef } from '../firebase.dp';

export const addNews = (news) => async dispatch  => {
    newsRef.push().set(news)
}

export const addToLatest = (news) => async dispatch => {
    latestRef.update(news)
}

export const readLatest = () => async dispatch => {
    latestRef.on("value", snapshot => {
        console.log(snapshot.val())
        dispatch({
            type: READ_LATEST,
            payload: snapshot.val()
        })
    })
}

export const fetchNews  = () => async dispatch => {
    newsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_LATEST_NEWS,
            payload: snapshot.val()
        })
    })
}