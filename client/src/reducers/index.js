// take all reducers and export rootreducer

import reducer from './reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  reducer
})

export default rootReducer
