import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import newsReducer from './newsReducer'

export default combineReducers({
    data: dataReducer,
    news: newsReducer
});