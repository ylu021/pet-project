// take all reducers and export rootreducer

import reducer from './reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart
})

export default rootReducer
