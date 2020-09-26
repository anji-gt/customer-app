import { combineReducers } from 'redux';
import customerReducer from './CustomerReducer';
import ModelPopUpReducer from './ModelPopUpReducer';

export default combineReducers({
    customers: customerReducer,
    modelPopUpReducer: ModelPopUpReducer
});