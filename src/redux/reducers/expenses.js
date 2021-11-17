import { ADD_EXPENSE, DEL_EXPENSE, SEARCH_EXPENSE } from "../actiontypes/expenses";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};
const initialState = {
  expenseList: initialList(),
  query: "",
};

export const expensesReducer = (state = initialState, { type, data, query, amount }) => {
  switch (type) {
    case ADD_EXPENSE: {
      localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, data]));
      return {
        ...state,
        expenseList: [...state.expenseList, data],
      };
    }
    case DEL_EXPENSE: {
      const updatedList = state.expenseList.filter(
        (expense) => expense.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }
    case SEARCH_EXPENSE: {
      return {
        ...state,
        query,
      };
    }

    default:
      return state;
  }
};
