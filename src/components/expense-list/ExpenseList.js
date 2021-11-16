import React from "react";
import Card from "./Card";
import "./expenseList.css";

const ExpenseList = () => {
  const list = [
    {
      title: "made a purchase",
      logo: "logo",
      createdAt: Date.now(),
      amount: 999,
    },
  ];
  return <div>{list.length ? list.map((item) => <Card item={item} />) : null}</div>;
};

export default ExpenseList;
