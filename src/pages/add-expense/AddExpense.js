import React from "react";
import AddForm from "../../components/add-form/AddForm";

import Topfold from "../../components/topfold/Topfold";
import "./add-expense.css";
const AddExpense = () => {
  return (
    <div className="center">
      <Topfold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
