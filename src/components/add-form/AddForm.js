import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categories } from "../../constants/add-expense";
import AddExpense from "../../pages/add-expense/AddExpense";
import "react-toastify/dist/ReactToastify.css";
import "./addform.css";
import SuccessModal from "./SuccessModal";
const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setcategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setmodalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setamount("");
      return;
    }
    setamount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setcategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () =>
        toast.warn("Please enter valid data", {
          position: "bottom-left",

          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    console.log(data);
    dispatch(AddExpense(data));
    setmodalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
      />
      {modalOpen && <SuccessModal />}
      <div className="form-tem">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="">Amount ₹</label>
        <input
          type="text"
          placeholder="Enter amount"
          className="amount-input"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div className="category-dropdown" onClick={() => setcategoryOpen(!categoryOpen)}>
            <label htmlFor="">{category ? category.title : "Category"}</label>
            <i className="fas fa-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((item) => {
                return (
                  <div
                    className="category-item"
                    style={{
                      borderRight: `5px solid ${item.color}`,
                    }}
                    key={item.id}
                    onClick={() => handleCategory(item)}
                  >
                    <label htmlFor="">{item.title}</label>
                    <img src={item.icon.default} alt={item.title} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label htmlFor="">Add</label>
          <i className="fab fa-telegram-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
