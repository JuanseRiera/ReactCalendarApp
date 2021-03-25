import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const CalendarModal = () => {
  const [isOpen, setisOpen] = useState(true);

  const closeModal = () => {
    setisOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>Holqa mundo</h1>
      <hr />
      <h3>Hola</h3>
    </Modal>
  );
};
