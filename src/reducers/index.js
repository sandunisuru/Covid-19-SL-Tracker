import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import newsReducer from './newsReducer'
import graphReducer from './graphReducer'

export default combineReducers({
    data: dataReducer,
    news: newsReducer,
    graph: graphReducer
});