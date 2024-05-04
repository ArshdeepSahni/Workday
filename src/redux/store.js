

import { createStore } from 'redux';
import jobFiltersReducer from './reducer';

const store = createStore(jobFiltersReducer);

export default store;
