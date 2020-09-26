import { createStore } from 'redux';
import rootReducer from '../reducers';

export function StoreConfig(intitalState) {
    return createStore(rootReducer, intitalState);
}
