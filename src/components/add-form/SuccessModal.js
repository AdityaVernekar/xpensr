import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./success-modal.css";
const SuccessModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "10px",
    },
  };
  return (
    <Modal isOpen={true} style={customStyles}>
      <div className="modal-inner">
        <label htmlFor="">Expense added successfully</label>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="expense added"
          className="added-image"
        />
        <Link to="/">
          <div className="home button">
            <label htmlFor="">Home</label>
            <i className="fas fa-home"></i>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
