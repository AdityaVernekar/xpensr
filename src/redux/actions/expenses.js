import { ADD_EXPENSE, DEL_EXPENSE, SEARCH_EXPENSE } from "../actiontypes/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DEL_EXPENSE,
    data,
  };
};

export const searchExpense = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
