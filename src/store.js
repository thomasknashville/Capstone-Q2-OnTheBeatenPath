import { createStore, combineReducers } from "redux";
import aboutReducer from "./components/about/Redux/aboutReducer";
import homeReducer from "./components/home/Redux/homeReducer";
import loginReducer from "./components/login/Redux/loginReducer";
import parksReducer from "./components/parks/Redux/parksReducer";
import reviewReducer from "./components/reviews/Redux/reviewReducer";

const allReducers = combineReducers({
  aboutReducer,
  homeReducer,
  loginReducer,
  parksReducer,
  reviewReducer,
});

const store = createStore(allReducers);

export default store;
