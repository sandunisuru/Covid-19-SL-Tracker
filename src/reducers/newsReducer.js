import { FETCH_LATEST_NEWS, READ_LATEST } from '../actions/types'

const initialState = {
    data: [],
    latest: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LATEST_NEWS:
            return {
                ...state,
                data: action.payload
            };

        case READ_LATEST:
            return {
                ...state,
                latest: action.payload
            };

        default:
            return state;
    }
}