import { GET_ALL_COUNTRIES, GET_DETAILS_BY_COUNTRY, GET_HISTORY_BY_COUNTRY } from '../actions/types'

const initialState = {
    countries: [],
    details: [],
    history: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };

        case GET_DETAILS_BY_COUNTRY:
            return {
                ...state,
                details: action.payload
            }
        case GET_HISTORY_BY_COUNTRY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}