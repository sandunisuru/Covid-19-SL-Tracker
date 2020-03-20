import { REFRESH_DATA, NEW_POST } from '../actions/types'

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REFRESH_DATA:
            return {
                ...state,
                data: action.payload
            };

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}