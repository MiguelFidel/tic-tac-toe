import { combineReducers } from '@reduxjs/toolkit';
import boardReducer from './board';

const rootReducer = combineReducers({
    board: boardReducer,
});
  
export default rootReducer;