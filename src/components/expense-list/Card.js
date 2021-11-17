import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";

import { deleteExpense } from "../../redux/actions/expenses";
import "./card.css";
const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };

  return (
    <div
      className="card"
      style={{
        borderRight: `5px solid ${item.category.color}`,
      }}
    >
      <div className="card-image-container">
        <img className="card-image" src={item.category.icon.default} alt={item.category.title} />
      </div>

      <div className="card-info">
        <h3 className="card-title">{item.title}</h3>
        <label htmlFor="" className="card-time">
          {time}
        </label>
      </div>
      <div className="card-right">
        <div>
          <label htmlFor="" className="card-amount">
            ₹ {item.amount}
          </label>
        </div>
        <div className="delete" onClick={handleDelete}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
