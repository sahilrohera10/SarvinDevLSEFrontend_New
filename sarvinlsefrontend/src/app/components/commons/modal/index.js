"use client";
import React, { useState } from "react";
import "./Modale.css";

const Modal = ({
  children,
  openModal = false,
  setOpenModal = () => {},
  animation = "one",
  closeOutside = true,
}) => {
  const [modalClass, setModalClass] = useState("");

  const handleButtonClick = (buttonId) => {
    setModalClass(buttonId);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      {closeOutside ? (
        <div
          id="modal-container"
          className={openModal ? animation : ""}
          onClick={() => closeModal()}
        >
          <div className="modal-background">
            <div className="modal" style={{ backgroundColor: "#f8f7ff" }}>
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div id="modal-container" className={openModal ? animation : ""}>
          <div className="modal-background">
            <div className="modal" style={{ backgroundColor: "#f8f7ff" }}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
