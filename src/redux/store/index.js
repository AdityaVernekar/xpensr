import { combineReducers, createStore } from "redux";
import { expensesReducer } from "../reducers/expenses";

const reducers = combineReducers({
  expenses: expensesReducer,
});
const initialState = {};
const store = createStore(reducers, initialState);

export default store;
