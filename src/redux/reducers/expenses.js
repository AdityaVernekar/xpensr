import { ADD_EXPENSE } from "../actiontypes/expenses";

const initialState = {
  expenseList: [],
};

export const expensesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseList: [...state.expenseList, payload],
      };
    }

    default:
      return state;
  }
};
