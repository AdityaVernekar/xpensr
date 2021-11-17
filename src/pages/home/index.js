import React from "react";
import ExpenseList from "../../components/expense-list/ExpenseList";
import Topfold from "../../components/topfold/Topfold";
import TotalAmount from "../../components/total-amount/TotalAmount";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
      <TotalAmount />
    </div>
  );
};

export default Home;
