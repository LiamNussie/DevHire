import { combineReducers } from 'redux';

import userReducer from './userReducer'
import uiReducer from './uiReducers'

const allReducers = combineReducers({
    userData: userReducer,
    uiState: uiReducer
  });
  
  export default allReducers;
  