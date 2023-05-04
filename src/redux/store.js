import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalogReducer";
let reducers = combineReducers({
  catalog: catalogReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
