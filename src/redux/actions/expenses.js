import { ADD_EXPENSE, DEL_EXPENSE } from "../actiontypes/expenses";

export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DEL_EXPENSE,
    payload: data,
  };
};
