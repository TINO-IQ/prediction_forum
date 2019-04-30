import { combineReducers } from 'redux';

// example Reducer Import
import ExampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  ExampleReducer,
  // same as 'ExampleReducer: ExampleReducer,'
});

export default rootReducer;