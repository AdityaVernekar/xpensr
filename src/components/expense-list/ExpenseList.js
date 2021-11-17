import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { toast, ToastContainer } from "react-toastify";
import "./expenseList.css";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const notifySuccess = () =>
    toast.success("Expense Deleted", {
      position: "bottom-left",

      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
      />
      {filteredList.length > 0 ? (
        filteredList.map((item) => {
          return <Card item={item} notifySuccess={notifySuccess} />;
        })
      ) : (
        <div className="empty-list">
          <img
            src={require("../../assets/images/empty.png").default}
            alt="Empty!"
            className="empty-image"
          />
          <label htmlFor="">Uh oh ! Your Expense List is Empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
