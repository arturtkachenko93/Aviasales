import { createStore } from 'redux';
import { filterReducer } from './filterReducer';

export const store = createStore(filterReducer);
