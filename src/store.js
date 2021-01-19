import { createStore, combineReducers } from "redux";
import aboutReducer from "./components/ReduxReducers";
import homeReducer from "./components/ReduxReducers";
import loginReducer from "./components/ReduxReducers";
import parksReducer from "./components/ReduxReducers";
import reviewReducer from "./components/ReduxReducers";

const allReducers = combineReducers({
  aboutReducer,
  homeReducer,
  loginReducer,
  parksReducer,
  reviewReducer,
});

const store = createStore(allReducers);

export default store;
