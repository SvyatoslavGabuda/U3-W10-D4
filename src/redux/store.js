import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/reducers";
import jobReduce from "./reducers/jobReduce";
const allReducer = combineReducers({
  favorite: mainReducer,
  saveJob: jobReduce,
});

const store = configureStore({
  reducer: allReducer,
});
export default store;
