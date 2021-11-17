import React from "react";
import { useSelector } from "react-redux";

import "./totalamount.css";
const TotalAmount = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);

  let totalAmount = 0;

  list.forEach((element) => {
    totalAmount += element.amount;
  });

  return (
    <div className="amount-container">
      <h3>Total Amount:</h3>
      <h2>₹ {totalAmount}</h2>
    </div>
  );
};

export default TotalAmount;
